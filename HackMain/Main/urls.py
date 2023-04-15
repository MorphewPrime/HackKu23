from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
# app_name = "Main"

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('register/', views.register, name='register'),

]