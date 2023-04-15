from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .forms import UserRegistrationForm


from .models import User

# Create your views here.

def user_list(request):
    print("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    users = User.objects.all()
    context = {'users': users}
    return render(request, './user_list.html', context)

def register(request):
    print(request.method)
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()

            messages.success(request, f'Your account has been created. You can log in now!')    
            return redirect('/accounts/login')
    else:
        form = UserRegistrationForm()

    context = {'form': form}
    return render(request, './register.html', context)

def index(request):
    print("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
    users = User.objects.all()
    context = {'users': users}
    return render(request, 'index.html', context)