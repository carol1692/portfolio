from flask import Flask, render_template, request, send_file, send_from_directory
import datetime as dt


app = Flask(__name__)

LANGUAGE = []
current_date = dt.datetime.now()
YEAR = current_date.year

def change_language(lang_list):
    new_mode = request.form.get('data')
    if len(lang_list) > 0:
        lang_list[:] = []
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
    result = load_language(LANGUAGE)
    if request.method == 'POST':
        result =  change_language(LANGUAGE)  
    return render_template('index.html', id='home', english=result, year = YEAR)

@app.route("/skills", methods=['GET', 'POST'])
def skill_page():
    result = load_language(LANGUAGE)
    
    if request.method == 'POST':
        result =  change_language(LANGUAGE) 
    return render_template('skills.html', id='skills', english=result, year = YEAR)

@app.route("/cv", methods=['GET', 'POST'])
def cv_page():
    result = load_language(LANGUAGE)
    if request.method == 'POST':
        result =  change_language(LANGUAGE)
    return render_template('cv.html', id='cv', english=result, year = YEAR)

@app.route("/download/<cv_version>", methods=['GET', 'POST'])
def download_cv(cv_version):
    if cv_version == 'cv_pt':
        path= r'static/cvs/cv- Ana Lemos - pt-br.pdf'
        return send_file(path, as_attachment=True)
    else:
        path= r'static/cvs/cv - Ana Lemos - en.pdf'
        return send_file(path, as_attachment=True)
       
    


if __name__ == "__main__":
    app.run()