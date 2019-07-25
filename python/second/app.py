from flask import Flask
import os

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['DB_URI'] = 'mysqli+mysqldb://{root}:{root}@{127.0.0.1}:{second}?charset=utf8'
app.config['SECRET_KEY'] = os.urandom(24)

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
