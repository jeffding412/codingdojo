from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# the index function is called when root is visited
def index(request):
    context = {
        "date": strftime("%B %d, %Y", gmtime()),
        "time": strftime("%I:%M %p", gmtime())
    }
    return render(request,'time_app/index.html', context)