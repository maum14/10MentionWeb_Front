// -------------------------------- Dark mode -------------------------------//

let switchBox = document.querySelector(".switch");  // je stock l'élément div.switch
let container = document.querySelector('.container-fluid'); 

let navbar = document.querySelector('.navbar-desktop');
let liens = document.querySelectorAll('.navbar-desktop a')
let btnChange = document.querySelector('.btn');
let icon = document.querySelector('.switch i');
let titre = document.querySelector('h1');

switchBox.addEventListener('click', changeMode); // je déclare l'évenement click sur la div.switch //

function changeMode(){
    // la div container change de couleur de fond //
    container.classList.toggle('container-change');
    navbar.classList.toggle('nav-dark');
    for (let a of liens) {
        a.classList.toggle("white-font");
    }
    // je déplace le bouton 
    btnChange.classList.toggle('btn-change');
    icon.classList.toggle('icone-change');

    if (icon.classList.contains('bi-sun-fill')) {

        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
        
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
        
    }

    titre.classList.toggle('white-font');
    switchBox.classList.toggle('switch-change');
}   

let icone = document.querySelector(".bloc-btn i");

icone.addEventListener('click',cliqueMode);
function cliqueMode(){

    if (icone.classList.contains('bi-emoji-neutral')) {

         icone.classList.remove('bi-emoji-neutral');
         icone.classList.add('bi-emoji-heart-eyes');
        
    } else {
        icone.classList.remove('bi-emoji-heart-eyes');
        icone.classList.add('bi-emoji-neutral');
        
    }
}


