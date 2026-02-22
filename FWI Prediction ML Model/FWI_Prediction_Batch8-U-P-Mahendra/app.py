from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load model and scaler
model = pickle.load(open("ridge.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    values = [
        float(request.form["Temperature"]),
        float(request.form["RH"]),
        float(request.form["Ws"]),
        float(request.form["Rain"]),
        float(request.form["FFMC"]),
        float(request.form["DMC"]),
        float(request.form["DC"]),
        float(request.form["ISI"]),
        float(request.form["BUI"])
    ]

    scaled = scaler.transform([values])
    fwi = round(float(model.predict(scaled)[0]), 2)

    if fwi < 5:
        risk, color = "Low", "#2ecc71"
    elif fwi < 15:
        risk, color = "Moderate", "#f1c40f"
    else:
        risk, color = "High", "#e74c3c"

    return render_template(
        "result.html",
        fwi=fwi,
        risk=risk,
        color=color
    )

if __name__ == "__main__":
    app.run(debug=True)
