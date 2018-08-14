from flask import Flask, render_template, redirect, request, session, flash
import re
# import the function connectToMySQL from the file mysqlconnection.pycopy
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt   
app = Flask(__name__)
bcrypt = Bcrypt(app)    # we are creating an object called bcrypt,
                        # which is made by invoking the function Bcrypt with our app as an argument
app.secret_key = "ThisIsSecret!"

# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('loginRegistrationdb')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/register', methods=['POST'])
def register_user():
    if len(request.form['first']) < 1:
        flash("This field is required!", 'first')
    elif len(request.form['first']) < 2:
        flash("First name must have at least 2 characters!", 'first')
    elif not request.form['first'].isalpha():
        flash("First name must contain only letters!", 'first')

    if len(request.form['last']) < 1:
        flash("This field is required!", 'last')
    elif len(request.form['last']) < 2:
        flash("Last name must have at least 2 characters!", 'last')
    elif not request.form['last'].isalpha():
        flash("Last name must contain only letters!", 'last')

    if len(request.form['email']) < 1:
        flash("This field is required!", 'email')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!", 'email')
    else:
        query = "SELECT email FROM users WHERE email = %(email)s;"
        data = {
                'email': request.form['email']
                }
        if mysql.query_db(query, data) != ():
            flash("Email Address already exists in database!", 'email')


    if len(request.form['password']) < 1:
        flash("This field is required!", 'password')
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters long!", 'password')

    if len(request.form['confirm']) < 1:
        flash("This field is required!", 'confirm')
    elif request.form['confirm'] != request.form['password']:
        flash("Passwords do not match!", 'confirm')

    if '_flashes' in session.keys():
        return redirect("/")

    # create the hash
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
    data = {
            'first_name': request.form['first'],
            'last_name':  request.form['last'],
            'email': request.form['email'],
            "password" : pw_hash
            }
    mysql.query_db(query, data)

    return redirect('/success')

@app.route('/login', methods=['POST'])
def login_user():
    query = "SELECT id, password FROM users WHERE email = %(email)s;"
    data = {
            'email': request.form['email']
            }
    result = mysql.query_db(query, data)
    # print(session['id'][0]['id'])
    print(result)
    if not result:
        flash("Account does not exist", "login")
        return redirect('/')

    # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
    if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
        # if we get True after checking the password, we may put the user id in session
        session['userid'] = result[0]['id']
        # never render on a post, always redirect!
        return redirect('/success')
    else:
        flash("Incorrect password", "login")
        return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)