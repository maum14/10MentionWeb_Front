/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

// div #rouge
let divRouge = document.querySelector('#rouge'); // je séléctionne ma div par son id ensuite je lui ajoute un écouteur d'évenement
divRouge.addEventListener('click',fDivRouge);
// l'écoute d'évenement se décompose en deux argument
// 1 -> l'action ici le click
// 2 -> le nom de la fonction ici fDivRouge

function fDivRouge(){ 
    divRouge.style.backgroundColor="gold";
    divRouge.style.borderRadius="50%";
    divRouge.innerText = "GOLD";

}

// le paragraphe p
function fP1(){
    alert("le paragrphe est cliqué")
}

// div #orange
let divOrange = document.querySelector('#orange');
divOrange.addEventListener('dblclick', function(){
    divOrange.style.backgroundColor=" purple";
    divOrange.style.borderRadius="50%";
    divOrange.innerText = "PURPLE";

})

// le h2 avec dblclick
function dbl (){

    alert('suite à un double click');

}

// div #bleu

let divBleu = document.querySelector('#bleu');
divBleu.addEventListener('mouseover', function(){

    divBleu.style.backgroundColor=" green";
    divBleu.style.borderRadius="50%";
    divBleu.innerText = "GREEN";
})

let divPrimary = document.querySelector('#primary');

divPrimary.addEventListener('mouseout' ,function (){

    divPrimary.style.backgroundColor=" pink";
    divPrimary.style.borderRadius="50%";
    divPrimary.innerText = "PINK";
})

// div #success : click et reclick


let divChangeCouleur = document.getElementById('success');

console.log(divChangeCouleur)
divChangeCouleur.addEventListener('click', function(){

     if (divChangeCouleur.classList.contains('vert')) { // je vérifie si la div contient la classe vert dans la liste de classes

        divChangeCouleur.classList.remove('vert');
        divChangeCouleur.classList.add('gold');
        divChangeCouleur.style.borderRadius="50%";
        divChangeCouleur.innerText = "GOLD";

        
    } else {
        divChangeCouleur.classList.remove('gold');
        divChangeCouleur.classList.add('vert');
        divChangeCouleur.style.borderRadius="0%";
        divChangeCouleur.innerText = "success";

        
    }
})


// cache-cache

let imgChat = document.querySelector('img');
imgChat.style.width= "300px";

let p =document.querySelectorAll('#pink p');
// let p =document.querySelectorAll('.col-6 p');  //    Equivalent à la ligne de dessus
console.log(p);

for (let i = 0; i < p.length; i++) {

    p[i].style.textDecoration = "underline";
    p[i].style.color = "#ff3366";
    p[i].style.fontWeight = "bold";
    
 }
 // boucle for of

// for (let pDif of p) {
//   pDif .style.textDecoration = 'underline';
//   pDif .style.fontWeight = 'bold';
//   pDif .style.color = '#ff3636';
// }


// boucle while

// let i = 0;

// while (i < p.length) {
//   p[i].style.textDecoration = 'underline';
//   p[i].style.fontWeight = 'bold';
//   p[i].style.color = '#ff3366';
//   i++
// }

p[0].addEventListener('click', ()=> {

    imgChat.classList.add('hide');
})

p[1].addEventListener('click', ()=> {
    
    imgChat.classList.remove('hide');
})

p[2].addEventListener('click', ()=> {
    
    imgChat.classList.toggle('hide');
})
