from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.get_all_comments),
    path('post/', views.user_comments)
]