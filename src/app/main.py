import os
import importlib
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route("/")
def hello():
    hello = "Hello world"
    return hello

@app.route("/<name>")
def dispatch_call(name):
    dipatchModule = importlib.import_module(name)
    dipatchModule = importlib.reload(dipatchModule)
    return dipatchModule.request(request.args) 

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=11111)
