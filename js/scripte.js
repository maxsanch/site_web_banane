document.querySelector("h2").innerText="formuaire 2"
document.querySelector(".resultat").innerText="veuillez entrer dans nom le numéro d'un étudiant"
let prenoms=["maxence", "bénedicte", "lou", "Ambre", "toff"];

function prenom(){
    let nombre=document.querySelector("input").value
    prenoms.push(nombre)
    let ligne="<tr><th>N° etudiant</th><th>Prénom</th></tr>"; 

    prenoms.forEach(function(nom, i)
    {
        ligne+="<tr><td>"+(i+1)+ "</td><td>"+ nom+"</td></tr>"
    })
    document.querySelector(".resultat").innerHTML="<table>"+ligne+"</table>"
}