from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # Set a secret key for security purposes

@app.route('/')
def index():
    if 'gold' in session and 'message' in session:
        print(session['message'])
    else:
        session['gold'] = 0 # setting session data
        session['message'] = []
    return render_template("index.html")

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

@app.route('/process_money', methods=['POST'])
def process_money():
    currentTime = datetime.now().strftime('(%Y/%m/%d %I:%M %p)')
    if request.form['building'] == 'farm':
        session['addition'] = random.randrange(10, 21)
        session['gold'] += session['addition']
        session['message'].insert(0, "<p>Earned " + str(session['addition']) + " gold from the farm! " + currentTime + "</p>")
    elif request.form['building'] == 'cave':
        session['addition'] = random.randrange(5, 11)
        session['gold'] += session['addition']
        session['message'].insert(0, "<p>Earned " + str(session['addition']) + " gold from the farm! " + currentTime + "</p>")
    elif request.form['building'] == 'house':
        session['addition'] = random.randrange(2, 6)
        session['gold'] += session['addition']
        session['message'].insert(0, "<p>Earned " + str(session['addition']) + " gold from the farm! " + currentTime + "</p>")
    elif request.form['building'] == 'casino':
        randomNum = random.randrange(0, 101)
        session['addition'] = 50 - randomNum
        session['gold'] += session['addition']
        if session['addition'] > 0:
            action = "won"
            message = "! "
        else:
            action = "lost"
            message = "... Ouch.. "
            session['addition'] *= -1
        session['message'].insert(0, "<p>Entered a casino and " + action + " " + str(session['addition']) + " gold" + message + currentTime + "</p>")
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)