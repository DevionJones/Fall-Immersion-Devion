rom flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "hello yall"


if __name__ == '__main__':
    app.run(debug = True)# instruction will below. 
