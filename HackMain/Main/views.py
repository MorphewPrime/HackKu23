from django.shortcuts import render
from .models import User

# Create your views here.

def user_list(request):
    print("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    users = User.objects.all()
    context = {'users': users}
    return render(request, './user_list.html', context)

def index(request):
    print("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    users = User.objects.all()
    context = {'users': users}
    return render(request, 'index.html', context)