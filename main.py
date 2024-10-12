from flask import Flask, render_template, request, redirect, url_for
from flask_babel import Babel

app = Flask(__name__)

LANGUAGE = []
GUARDA_LANGUAGE = []

def change_language(lang_list):
    new_mode = request.form.get('data')
    if len(lang_list) > 0:
        lang_list.clear()
    result = lang_list.append(bool(int(new_mode)))
    return result

def load_language(lang_list):
    if len(lang_list) == 0:
        result = False
    else:
        result = lang_list[-1]
    return result


@app.route("/", methods=['GET', 'POST'])
def home():
    print(f'LANGUAGE inicio: {LANGUAGE}')
    result = load_language(LANGUAGE)
    
    if request.method == 'POST':
        result =  change_language(LANGUAGE)  
        # return render_template('index.html', id='home', english=result) 
    print(f'LANGUAGE: {LANGUAGE}')
    return render_template('index.html', id='home', english=result)

@app.route("/skills", methods=['GET', 'POST'])
def skill_page():
    print(f'LANGUAGE inicio: {LANGUAGE}')
    result = load_language(LANGUAGE)
    
    if request.method == 'POST':
        result =  change_language(LANGUAGE) 
        # return render_template('index.html', id='home', english=result)  
    print(f'LANGUAGE: {LANGUAGE}')
    return render_template('skills.html', id='skills', english=result)

@app.route("/cv", methods=['GET', 'POST'])
def cv_page():
    print(f'LANGUAGE inicio: {LANGUAGE}')
    result = load_language(LANGUAGE)
    
    if request.method == 'POST':
        result =  change_language(LANGUAGE)  
        # return render_template('index.html', id='home', english=result)
    print(f'LANGUAGE: {LANGUAGE}') 
    return render_template('contact.html', id='cv', english=result)


if "__name__" == "__main__":
    app.run()