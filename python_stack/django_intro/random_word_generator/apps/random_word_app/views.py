from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
# Create your views here.
def index(request):
    if 'randomString' not in request.session:
        request.session['randomString'] = get_random_string(length=14)

    if 'attempts' not in request.session:
        request.session['attempts'] = 1

    return render(request, "random_word_app/index.html")

def generate(request):
    request.session['randomString'] = get_random_string(length=14)
    request.session['attempts'] += 1
    return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')