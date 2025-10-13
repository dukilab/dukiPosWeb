from flask import *
import json,uuid

PORT = 10001

with open("items.json", encoding="utf-8") as f:
    items = json.load(f)

app = Flask(__name__)
session = {}

@app.route("/posMain")
def posMain():
    return render_template("posMain.htm", items=items)

@app.route("/order", methods=["POST"])
def order():
    data = request.json
    session_id = str(uuid.uuid4())
    session[session_id] = data
    print(session_id)
    print(data)
    return jsonify({"session_id": session_id})


@app.route("/css/<path>")
def css(path):
    return send_from_directory("css", path)

@app.route("/js/<path>")
def js(path):
    return send_from_directory("js", path)

if(__name__ == "__main__"):
    app.run(debug=False, port=PORT)