from django.urls import path, include
from .import views

urlpatterns = [
    path('', views.get_all_comments),
    path('post/<str:video_id>/', views.user_comments),
    path('<int:pk>/', views.put_comment)
]