from django.contrib import admin

# Register your models here.
from .models import User, Lesson, Subject, Comment, Club, Member, Assignment, UserAssignment, Grade, Profile, Hobby


# class UserAdmin(admin.ModelAdmin):
#     pass
# list_display = ("finame", "email", "teacher")


class LessonAdmin(admin.ModelAdmin):
    list_display = ("subject", "topic", "lesson", "start_date", "end_date")


class CommentAdmin(admin.ModelAdmin):
    list_display = ("lesson", "user", "comment")


class ClubsAdmin(admin.ModelAdmin):
    list_display = ("name", "meetDate")


class MembersAdmin(admin.ModelAdmin):
    list_display = ("user", "club")


class AssignmentsAdmin(admin.ModelAdmin):
    list_display = ("subject", "assignment")


class UserAssignmentAdmin(admin.ModelAdmin):
    list_display = ("assignment", "user", "status", "completed_assignment")


class GradesAdmin(admin.ModelAdmin):
    list_display = ("user", "assignment", "grade")


class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "user_info", "user_age", "user_grade")


class HobbiesAdmin(admin.ModelAdmin):
    list_display = ("user", "hobbies")


admin.site.register(User)
admin.site.register(Subject)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Club, ClubsAdmin)
admin.site.register(Member, MembersAdmin)
admin.site.register(Assignment, AssignmentsAdmin)
admin.site.register(UserAssignment, UserAssignmentAdmin)
admin.site.register(Grade, GradesAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Hobby, HobbiesAdmin)
admin.site.register(Lesson, LessonAdmin)