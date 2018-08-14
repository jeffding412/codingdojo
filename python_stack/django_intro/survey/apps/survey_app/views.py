from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "survey_app/index.html")

def submit(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['dojoLocation']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect("/result")

def result(request):
    return render(request, "survey_app/success.html")