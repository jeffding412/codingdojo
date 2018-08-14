from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
# our index route will handle rendering our form

@app.route('/')
def index():
    return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route

@app.route('/danger')
def danger():
    print("a user tried to visit /danger.  we have redirected the user to /")
    return redirect('/')

@app.route('/success', methods=['POST'])
def create_user():
    session.clear()
    if len(request.form['name']) < 1:
        flash("Name cannot be blank!", 'name')

    if len(request.form['comment']) < 1:
        flash("Comment cannot be blank!", 'comment')
    elif len(request.form['comment']) > 120:
        flash("Comment must be less than 120 characters", 'comment')
    
    name = request.form['name']
    location = request.form['dojoLocation']
    language = request.form['language']
    comment = request.form['comment']

    if '_flashes' in session.keys():
        return redirect("/")
    else:
        return render_template("success.html", name=name, location=location, language=language, comment=comment)

if __name__=="__main__":
    # run our server
    app.run(debug=True) 