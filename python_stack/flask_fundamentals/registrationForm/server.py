from flask import Flask, render_template, redirect, request, session, flash
import re
# EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
# our index route will handle rendering our form

@app.route('/')
def index():
    return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

@app.route('/success', methods=['POST'])
def create_user():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!", 'email')

    if len(request.form['first']) < 1:
        flash("First name cannot be blank!", 'first')
    elif bool(re.search(r'\d', request.form['first'])):
        flash("First name cannot contain numbers!", 'first')

    if len(request.form['last']) < 1:
        flash("Last name cannot be blank!", 'last')
    elif bool(re.search(r'\d', request.form['last'])):
        flash("Last name cannot contain numbers!", 'last')

    if len(request.form['password']) < 1:
        flash("Password cannot be blank!", 'password')
    elif len(request.form['password']) <= 8:
        flash("Password must contain more than 8 characters!", 'password')
    elif not bool(re.search(r'[A-Z]', request.form['password'])):
        flash("Password must contain an uppercase!", 'password')
    elif not bool(re.search(r'[0-9]', request.form['password'])):
        flash("Password must contain a number!", 'password')

    if len(request.form['confirm']) < 1:
        flash("Confirmation cannot be blank!", 'confirmation')
    elif request.form['password'] != request.form['confirm']:
        flash("Passwords do not match!", 'confirmation')

    if len(request.form['bday']) < 1:
        flash("Birthday cannot be blank!", 'bday')

    if '_flashes' in session.keys():
        return redirect("/")
    else:
        session["message"] = "Thanks for submitting your information."
        return redirect("/")

if __name__=="__main__":
    # run our server
    app.run(debug=True) 