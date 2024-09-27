from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/skills")
def skill_page():
    return render_template('skills.html')

@app.route("/contact")
def contact_page():
    return render_template('contact.html')


if "__name__" == "__main__":
    app.run()