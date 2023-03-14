from django.urls import path, include
from .import views

urlpatterns = [
    path('<int:fk>/', views.get_replies)
    # path('<int:pk>/', views.post_reply)
]