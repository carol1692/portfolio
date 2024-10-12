function activeURL(element, english){
    if (english == 'True'){
        document.getElementById("portuguese_content").style.display = "none"; 
        document.getElementById("english_content").style.display = "block"; 
        document.getElementById("flexSwitch").setAttribute("checked","checked")
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
                }else{
                    document.getElementById("portuguese_content").style.display = "block"; 
                    document.getElementById("english_content").style.display = "none"; 
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
                }else{
                    document.getElementById("portuguese_content").style.display = "block"; 
                    document.getElementById("english_content").style.display = "none"; 
                }
            },
            error: function(error){
                console.log(error)
            }
        })
    }
}
