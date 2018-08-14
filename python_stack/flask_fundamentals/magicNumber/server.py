from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # Set a secret key for security purposes

@app.route('/')
def index():
    if 'magicNumber' in session:
        print(session['magicNumber'])
    else:
        session['magicNumber'] = random.randrange(1, 101) # setting session data
    return render_template("index.html")

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

@app.route('/guess', methods=['POST'])
def guess():
    session['guess'] = request.form['guess']
    guess = int(session['guess'])
    magicNumber = int(session['magicNumber'])
    if guess < magicNumber:
        session['message'] = "Too low!"
    elif guess > magicNumber:
        session['message'] = "Too high!"
    else:
        session['message'] = str(magicNumber) + " was the number!"
        session['right'] = 1
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)