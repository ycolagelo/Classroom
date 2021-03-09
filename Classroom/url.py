from . import views
from Project5 import settings
from django.urls import path
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("api/lessons", views.get_lessons),
    path("api/update_lesson_comment/<int:lesson_id>",
         views.update_lesson_comment),
    path("api/get_comments/<int:lesson_id>", views.get_comments)
]


# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL,
#                           document_root=settings.STATIC_ROOT)
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)
