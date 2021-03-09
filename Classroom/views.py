import json
from datetime import date, datetime
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect, JsonResponse
from django.db import IntegrityError
from django.shortcuts import render
from django.urls import reverse
from .models import User, Lesson, Comment
from .helpers import serialize_array
from datetime import timedelta


def index(request):
    user = request.user
    if user.is_authenticated:
        user_info = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        }
    else:
        user_info = None
    return render(request, 'Classroom/index.html', {
        'user_info': user_info
    })


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "Classroom/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "Classroom/login.html")


@csrf_exempt
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):

    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "Classroom/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "Classroom/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "Classroom/register.html")


def get_lessons(request):
    today = date.today()

    lessons = Lesson.objects.filter(
        start_date__lte=today, end_date__gte=today)

    return JsonResponse(serialize_array(lessons), safe=False)


@csrf_exempt
def update_lesson_comment(request, lesson_id):
    if request.method == "POST":
        data = json.loads(request.body)
        subject = Lesson.objects.get(id=lesson_id)
        post = Comment(
            user=request.user,
            lesson=subject,
            comment=data["posts"],
        )
        post.save()
        return JsonResponse(post.serialize(), safe=False)


def get_comments(request, lesson_id):
    """return all the comments for a specific lesson"""
    comments = Comment.objects.filter(lesson=lesson_id)
    return JsonResponse(serialize_array(comments), safe=False)
