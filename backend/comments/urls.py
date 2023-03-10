from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.get_all_comments),
    path('', views.user_comments)
]