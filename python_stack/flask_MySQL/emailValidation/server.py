from flask import Flask, render_template, redirect, request, session, flash
import re
import json
# import the function connectToMySQL from the file mysqlconnection.pycopy
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('emails')

@app.route('/')
def index():
    all_emails = mysql.query_db("SELECT email FROM users")
    print(all_emails)
    return render_template('index.html')
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route

@app.route('/create_friend', methods=['POST'])
def create():
    requestEmail = request.form['email']
    query = "SELECT email FROM users WHERE email = %(email)s;"
    data = { 'email' : request.form['email'] }
    result = mysql.query_db(query, data)
    found = False
    for entry in result:
        if entry['email'] == requestEmail:
            print("Email Found")
            found = True

    if not found:
        flash("Email is not valid!", 'email')

    if '_flashes' in session.keys():
        return redirect("/")
    else:
        return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)