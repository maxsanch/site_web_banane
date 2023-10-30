function recherche(){
    let nom=document.querySelector(".input").value
    if(nom==""){
        document.querySelector(".input").classList.add("erreur")
    }
    else{
        if(nom=="index"){
            window.location = document.querySelector(".input").value + '.html';
        }
        else{
            window.location = 'pages/' +document.querySelector(".input").value + '.html';
        }
       
    }
}
function changer(){
    let theme=document.querySelector("#theme").innerText

    if(theme=="claire"){
        document.querySelector("#theme").innerText="sombre"
        document.querySelector("link").setAttribute('href', 'styles/stylesb.css')
    }
    else{
        document.querySelector("#theme").innerText="claire"
        document.querySelector("link").setAttribute('href', 'styles/styles.css')
    }
}