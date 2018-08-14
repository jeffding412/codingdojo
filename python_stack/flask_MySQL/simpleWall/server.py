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
mysql = connectToMySQL('simplewalldb')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success')
def success():
    query = "SELECT id,first_name FROM users WHERE id != %(id)s;"
    data = {
            'id': session['userid']
            }
    session['users'] = mysql.query_db(query, data)

    query = "select messages.id, message, messages.updated_at, users.first_name as sender_name from messages join users on users.id = messages.sender_id where receiver_id = %(id)s;"
    data = {
            'id': session['userid']
            }
    session['messages'] = mysql.query_db(query, data)

    print(session['messages'])

    query = "select count(*) as numMessages from messages where sender_id = %(id)s;"
    data = {
            'id': session['userid']
            }
    session['numMessages'] = mysql.query_db(query, data)[0]['numMessages']

    return render_template('success.html')

@app.route('/deleteMessage', methods=['POST'])
def delete():
    query = "DELETE FROM messages WHERE id = %(id)s;"
    data = {
            'id': request.form['deleteID']
            }
    mysql.query_db(query, data)
    return redirect('/success')

@app.route('/post_message', methods=['POST'])
def postMessage():
    query = "INSERT INTO messages (sender_id, receiver_id, message, created_at, updated_at) VALUES (%(sender_id)s, %(receiver_id)s, %(message)s, NOW(), NOW());"
    data = {
            'sender_id': session['userid'],
            'receiver_id': int(request.form['targetID']),
            'message': request.form['submitMessage']
            }
    mysql.query_db(query, data)

    # delete this when done
    query = "SELECT * FROM messages;"
    print(mysql.query_db(query))

    return redirect('/success')

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
    query = "INSERT INTO users (first_name, last_name, email, password_hash, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password_hash)s, NOW(), NOW());"
    data = {
            'first_name': request.form['first'],
            'last_name':  request.form['last'],
            'email': request.form['email'],
            "password_hash" : pw_hash
            }
    mysql.query_db(query, data)

    query = "SELECT id, first_name FROM users WHERE email = %(email)s;"
    data = {
            'email': request.form['email']
            }
    result = mysql.query_db(query, data)
    session['userid'] = result[0]['id']
    session['username'] = result[0]['first_name']

    return redirect('/success')

@app.route('/login', methods=['POST'])
def login_user():
    query = "SELECT id, first_name, password_hash FROM users WHERE email = %(email)s;"
    data = {
            'email': request.form['email']
            }
    result = mysql.query_db(query, data)
    if not result:
        flash("Account does not exist", "login")
        return redirect('/')

    # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
    if bcrypt.check_password_hash(result[0]['password_hash'], request.form['password']):
        # if we get True after checking the password, we may put the user id in session
        session['userid'] = result[0]['id']
        session['username'] = result[0]['first_name']
        # never render on a post, always redirect!
        return redirect('/success')
    else:
        flash("Incorrect password", "login")
        return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)