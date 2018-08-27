from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def frontpage():
    name = 'TestShop.dk'
    return render_template('frontpage.html', name=name)
