from . import views
from Project5 import settings
from django.urls import path
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index, name="index"),
]

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL,
#                           document_root=settings.STATIC_ROOT)
#     urlpatterns += static(settings.MEDIA_URL,
#                           document_root=settings.MEDIA_ROOT)
