from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, "words_app/index.html")

def add_word(request):
    if 'entries' in request.session:
        temp_list = request.session['entries']
    else:
        temp_list = []

    temp_list.append({"word": request.POST['word'], "color": request.POST['color'], "bigfont": request.POST['bigfont']})
    request.session['entries'] = temp_list
    print(request.session['entries'])
    return redirect('/')

def clear_session(request):
    request.session.clear()
    return redirect('/')