//-----------------------loader-------------------------//

 let loader = document.querySelector('#loader');
 window.addEventListener('load', ()=>{
    loader.classList.add('hideLoader');
 })

 // --------------------- Dark mode -----------------//

let switchBox = document.querySelector('.switch'); // je stock l'élément div.switch

let container = document.querySelector('.container-fluid'); // je stock l'élément div.container

switchBox.addEventListener('click', changeMode);// je déclare l'événement click sur la div.switch 

let nav = document.querySelector('.navbar-desktop');

let liens = document.querySelectorAll('.navbar-desktop a');

let btnChange = document.querySelector('.btn');

let icon = document.querySelector('.switch i');

let titre = document.querySelector('h1');


function changeMode(){

    //  la div container ch&nge de couleur de fond
    container.classList.toggle('container-change');
    nav.classList.toggle('nav-dark');

    for (let lien of liens) {
        
        lien.classList.toggle('lienDarkMode');
    }

    // je déplace le bouton 
    btnChange.classList.toggle('btn-change');
    //je change la couleur du bouton
    btnChange.classList.toggle('btn-dark');

    icon.classList.toggle('icone-change');

    if (icon.classList.contains('bi-sun-fill')) {

        icon.classList.remove('bi-sun-fill');
        icon.classList.add("bi-moon-fill");
        
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add("bi-sun-fill");  
    }

    switchBox.classList.toggle('switch-change');

    titre.classList.toggle('titre');

}
/*
    ╔═════════════════════════════════════════════╗
    ║                   Cookies                   ║
    ╚═════════════════════════════════════════════╝ */



    let bpCookies = document.querySelector(".btn-success");
    let divCookies = document.querySelector(".cookies");
    
    bpCookies.addEventListener('click', ()=> {
      divCookies.style.bottom = "auto";
    })

 //********************* Keyboard *********************** *//

 let mario = document.getElementById('mario');

 document.addEventListener('keydown',clavier);
 function clavier(event){

     /* L'objet event en JavaScript est un objet qui représente un événement déclenché dans le navigateur
     Lorsqu'une action se produit sur une page web (comme un clic de souris, un appui sur une touche du clavier, etc.), un objet event est créé pour encapsuler toutes les informations liées à cet événement. 
     Cet objet event contient diverses propriétés et méthodes qui fournissent des détails sur l'événement qui s'est produit. Voici quelques-unes des propriétés les plus couramment utilisées :
    
        - type: Indique le type d'événement déclenché (par exemple, "click", "keydown", "mousemove", etc.).
        - target: Référence à l'élément DOM sur lequel l'événement s'est produit.
        - keyCode (ou key): Code de la touche du clavier qui a été pressée lors d'un événement keydown.
        - clientX et clientY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la fenêtre du navigateur.
        - pageX et pageY: Coordonnées horizontales et verticales du pointeur de la souris par rapport à la page web. 
    */
    console.log(event)
    console.log(mario.offsetTop)

    console.log(mario.offsetLeft)


    if (event.key == "ArrowUp") {
        mario.style.top = mario.offsetTop - 10 +'px';
        mario.style.rotate = '270deg'; 
        mario.style.transform = 'scaleX(1)';
      }
      else if (event.key == "ArrowDown") {
        mario.style.top = mario.offsetTop + 10 +'px';
        mario.style.rotate = '90deg';
        mario.style.transform = 'scaleX(1)';  
      }
      else if (event.key == "ArrowLeft") {
        mario.style.left = mario.offsetLeft - 10 +'px';
        mario.style.rotate = '0deg';
        mario.style.transform = 'scaleX(-1)';
      }
      else if (event.key == "ArrowRight") {
        mario.style.left = mario.offsetLeft + 10 +'px';
        mario.style.rotate = '0deg';
        mario.style.transform = 'scaleX(1)';
      }
      else if (event.key == "z") {
        mario.style.top = mario.offsetTop - 10 +'px';
        mario.style.left = mario.offsetLeft - 10 +'px';
        mario.style.rotate = '40deg';
        mario.style.transform = 'scaleX(-1)';
      }
      else if (event.key == "s") {
        mario.style.top = mario.offsetTop - 10 +'px';
        mario.style.left = mario.offsetLeft + 10 +'px';
        mario.style.rotate = '-40deg';
        mario.style.transform = 'scaleX(1)';
      }
      else if (event.key == "q") {
        mario.style.top = mario.offsetTop + 10 +'px';
        mario.style.left = mario.offsetLeft - 10 +'px';
        mario.style.rotate = '320deg';
        mario.style.transform = 'scaleX(-1)';
      }
      else if (event.key == "d") {
        mario.style.top = mario.offsetTop + 10 +'px';
        mario.style.left = mario.offsetLeft + 10 +'px';
        mario.style.rotate = '-320deg';
        mario.style.transform = 'scaleX(1)';
      }

     /*switch(event.code){

        case 'ArrowUp' :
            mario.style.top =  (mario.offsetTop - 10) + "px";

        break;

        case 'ArrowRight' :
            mario.style.left = (mario.offsetLeft + 10 ) + "px";
            mario.style.transform = "scaleX(1)";
        break;

        case 'ArrowDown' :
            mario.style.top = (mario.offsetTop + 10 ) + "px";
        break;

        case 'ArrowLeft' :
            mario.style.left = (mario.offsetLeft - 10 ) + "px";
            mario.style.transform = "scaleX(-1)";

        break;
        case "KeyW" :
              mario.style.left = mario.offsetLeft - 10 + "px";
              mario.style.top = mario.offsetTop - 10 + "px";
              mario.style.rotate= "40deg";
              mario.style.transform = "scaleX(-1)";

       break;
       case "KeyS" :
              mario.style.top = mario.offsetTop - 10 + "px";
              mario.style.left = mario.offsetLeft + 10 + "px";
              mario.style.rotate= "-40deg";
              mario.style.transform = "scaleX(1)";

       break;
       case "KeyA" :
         
              mario.style.top = mario.offsetTop + 10 + "px";
              mario.style.left = mario.offsetLeft - 10 + "px";
              mario.style.rotate= "-40deg";
              mario.style.transform = "scaleX(-1)";

       break;
       case "KeyD" :
              mario.style.left = mario.offsetLeft + 10 + "px";
              mario.style.top = mario.offsetTop + 10 + "px";
              mario.style.rotate= "40deg";
              mario.style.transform = "scaleX(1)";

       break;
       

    }*/

    //------------------------ if avec keyCode-----------------------------------
    // if(event.keyCode == 38){

    //     mario.style.top = mario.offsetTop - 10 + 'px';


    // }else if(event.keyCode == 39){

    //     mario.style.left = mario.offsetLeft + 10 + 'px';

    // }else if(event.keyCode == 40){

    //     mario.style.top = mario.offsetTop + 10 + 'px';

    // }else if(event.keyCode == 37){

    //     mario.style.left = mario.offsetLeft - 10 + 'px';

    // }
 
    }
