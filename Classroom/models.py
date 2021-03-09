from django.db import models
from django.contrib.auth.models import AbstractUser
# from datetime import timedelta
from datetime import datetime


class User(AbstractUser):
    """users database is written by the superuser/teacher.
     The students are predetermined by the teacher"""
    teacher = models.CharField(max_length=30, default="Mr. Thompson")


class Subject(models.Model):
    """stores the subject and the lesson of the day"""
    subject = models.CharField(max_length=45, null=False)

    def __str__(self):
        return f"{self.subject}"


class Lesson(models.Model):
    """storages foe lessons of the day"""
    subject = models.ForeignKey(
        Subject, on_delete=models.PROTECT)
    topic = models.CharField(max_length=50, null=False, default="topic")
    lesson = models.CharField(max_length=500, null=False,)
    start_date = models.DateField(auto_now_add=True)
    end_date = models.DateField(default=datetime.now(), blank=True)
    # end_date = models.DateField(default=start_date + timedelta(days=15))

    def serialize(self):
        return {
            "id": self.id,
            "subject": self.subject.subject,
            "lesson": self.lesson,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "topic": self.topic
        }

    def __str__(self):
        return f"{self.lesson}"


# class Lesson

class Comment(models.Model):
    """stores the comments made by the both students and teacher on the lessons"""
    # TODO: Change subject to lesson
    lesson = models.ForeignKey(
        Lesson, on_delete=models.PROTECT)
    user = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="commentor")
    comment = models.CharField(max_length=600, null=False)

    def serialize(self):
        return {
            "id": self.id,
            "lesson": self.lesson.serialize(),
            "user": self.user.get_full_name(),
            "comment": self.comment
        }

    # def serialize_with_userinfo(self, user):


class Club(models.Model):
    """ stores the name of the club and the date the club meets"""
    name = models.CharField(max_length=60, null=False)
    meetDate = models.DateField()


class Member(models.Model):
    """members of the clubs"""
    user = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="Child")
    club = models.ForeignKey(
        Club, on_delete=models.PROTECT)

    def serialize(self):
        return {

            "user": self.user.get_full_name(),
            "club": self.club
        }


class Assignment(models.Model):
    """assignment storage"""
    subject = models.ForeignKey(
        Subject, on_delete=models.PROTECT)
    assignment = models.FileField()

    def serialize(self):
        return {

            "subject": self.subject,
            "assignment": self.assignment
        }


class UserAssignment(models.Model):
    """for assignments to be graded"""
    assignment = models.ForeignKey(
        Assignment, on_delete=models.PROTECT, related_name="test")
    user = models.ForeignKey(
        User, on_delete=models.PROTECT)
    status = models.CharField(max_length=30, default="Not Submitted")
    completed_assignment = models.FileField()

    def serialize(self):
        return {
            "assignment": self.assignment.id,
            "user": self.user.get_full_name(),
            "status": self.status,
            "completed": self.completed_assignment
        }

    def __str__(self):
        return f"{self.user.get_full_name()}"


class Grade(models.Model):
    """grades"""
    user = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="graded_Student")
    assignment = models.ForeignKey(
        Assignment, on_delete=models.PROTECT)
    grade = models.IntegerField(blank=True, null=True)


class Profile(models.Model):
    """student profile"""
    user = models.ForeignKey(
        User, on_delete=models.PROTECT)
    user_info = models.CharField(max_length=800)


class Hobby(models.Model):
    """student hobbies"""
    user = models.ForeignKey(
        User, on_delete=models.PROTECT, related_name="student")
    hobbies = models.CharField(max_length=80)

    def __str__(self):
        return f"{self.user.get_full_name()}"
