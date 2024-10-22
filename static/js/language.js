function activeURL(element, english){
    if (english == 'True'){
        document.getElementById("portuguese_content").style.display = "none"; 
        document.getElementById("english_content").style.display = "block"; 
        document.getElementById("download_pt").innerHTML = 'Portuguese - BR';
        document.getElementById("download_en").innerHTML = 'English';
    }
    else{
        document.getElementById("portuguese_content").style.display = "block"; 
        document.getElementById("english_content").style.display = "none"; 
        document.getElementById("download_pt").innerHTML = 'Português - BR';
        document.getElementById("download_en").innerHTML = 'Inglês';
    }
    document.getElementById(element).classList.add("active","fw-bold")
}
   
function language(id){
    let switch_lang = document.getElementById("flexSwitch")
    if(switch_lang.checked){
        lang = 1
    }
    else{
        lang = 0
    }
    if (id == 'home'){
        console.log('lang: ', lang)
        $.ajax({
            url: '/',
            type: 'POST',
            data:{'data': lang},
            success: function(){
                if( lang == 1){
                    document.getElementById("portuguese_content").style.display = "none"; 
                    document.getElementById("english_content").style.display = "block"; 
                    document.getElementById("skills_bt").innerHTML = 'Skills';
                    document.getElementById("cv_bt").innerHTML = 'Resume';
                    document.getElementById("footer").innerHTML = `${new Date().getFullYear()}, Ana Lemos - Autoral Content`;
                    
                }else{
                    document.getElementById("portuguese_content").style.display = "block"; 
                    document.getElementById("english_content").style.display = "none"; 
                    document.getElementById("skills_bt").innerHTML = 'Habilidades';
                    document.getElementById("cv_bt").innerHTML = 'Currículo';
                    document.getElementById("footer").innerHTML = `${new Date().getFullYear()}, Ana Lemos - Conteúdo autoral`;

                }
            },
            error: function(error){
                console.log(error)
            }
        })
    }
    else{
        $.ajax({
            url: `/${id}`,
            type: 'POST',
            data:{'data': lang},
            success: function(){
                if( lang == 1){
                    document.getElementById("portuguese_content").style.display = "none"; 
                    document.getElementById("english_content").style.display = "block"; 
                    document.getElementById("skills_bt").innerHTML = 'Skills';
                    document.getElementById("cv_bt").innerHTML = 'Resume';
                    document.getElementById("footer").innerHTML = `${new Date().getFullYear()}, Ana Lemos - Autoral Content`;
                    document.getElementById("download_pt").innerHTML = 'Portuguese - BR';
                    document.getElementById("download_en").innerHTML = 'English';
                }else{
                    document.getElementById("portuguese_content").style.display = "block"; 
                    document.getElementById("english_content").style.display = "none"; 
                    document.getElementById("skills_bt").innerHTML = 'Habilidades';
                    document.getElementById("cv_bt").innerHTML = 'Currículo';
                    document.getElementById("footer").innerHTML = `${new Date().getFullYear()}, Ana Lemos - Conteúdo autoral`;
                    document.getElementById("download_pt").innerHTML = 'Português - BR';
                    document.getElementById("download_en").innerHTML = 'Inglês';
                }
            },
            error: function(error){
                console.log(error)
            }
        })
    }
}
