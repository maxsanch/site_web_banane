function recherche(){
    let nom=document.querySelector(".input").value
    if(nom==""){
        document.querySelector(".input").classList.add("erreur")
    }
    else{
        window.location = 'pages/' +document.querySelector(".input").value + '.html';
    }
}