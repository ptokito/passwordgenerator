from flask import Flask, render_template, request
import random
import string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def generate_password():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    special_chars = "!@#$%^&*()_+=-"
    password = ''.join(random.choices(string.ascii_letters + string.digits + special_chars, k=9))
    return render_template('index.html', first_name=first_name, last_name=last_name, password=password)

if __name__ == '__main__':
    app.run(debug=True)

