from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/play')
def play():
    return render_template("play.html")

@app.route('/play/<x>')
def playX(x):
    return render_template("playX.html", times=int(x))

@app.route('/play/<x>/<color>')
def playXC(x, color):
    return render_template("playXC.html", times=int(x), colour=color)

if __name__=="__main__":
    app.run(debug=True)