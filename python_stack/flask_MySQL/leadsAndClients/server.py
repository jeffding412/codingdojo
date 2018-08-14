from flask import Flask, render_template, redirect, request, session, flash
import re
import json
# import the function connectToMySQL from the file mysqlconnection.pycopy
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

# invoke the connectToMySQL function and pass it the name of the database we're using
# connectToMySQL returns an instance of MySQLConnection, which we will store in the variable 'mysql'
mysql = connectToMySQL('customers')

@app.route('/')
def index():
    all_customers = mysql.query_db("SELECT * FROM customers")
    customerChart = mysql.query_db("SELECT leads as y, name as label FROM customers;")
    return render_template('index.html', customers = all_customers, customerData = customerChart)
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route

if __name__ == "__main__":
    app.run(debug=True)