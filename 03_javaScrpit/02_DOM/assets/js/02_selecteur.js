//alert("ok");
/** 
 
* Afin de modifier notre page HTML selon les intéractions d'un utilisaateur, nous allons modifier
notre DOM grâce  à JS
*/
//---------------------------
// SELECTIONNER NOS ELEMENTS
//--------------------------

// selection via tag

let title= document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p'); // on cherche tous les paragraphes de notre page
// On récupère un array (tableau) d'élément
// index 0 comme les cours sur les tableaux
console.log(lesP);

// Grâce à ma variable dans laquelle j'ai sélectioné tous les p, je peux viser un seul des éléments grâce à son index. Pour faire de CSS j'utilise la propriété 'style' suivi des mêmes déclarations que j'utilise en CSS, avec du camelCase à la place de kebab-case.
// La propriété style permet d'accéder finement au styles qui concernent un élément particulier.
lesP[0].style.backgroundColor = " red ";
lesP[0].style.Color = " white " ;
lesP[0].style.fontWeight = " bold " ;

// Selection via id

let titre = document.getElementById("titre");
console.log(titre);

//selection via classe

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1]);

console.log(selectClass[1].innerHTML); 

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'ceci est le titre modifier avec javascript'

let lestitres = document.getElementsByClassName("subtitle");
console.log(lestitres);
lestitres[0].innerHTML = "<em> Ceci est le titre modifié avec JavaScript </em>"

// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

// lorsqu'il ny a pas beaucoup
//  lesP[0].style.textTransform = "uppercase";
//  lesp[1].style.textTransform = " uppercase";
//  lesP[2].style.textTransform = "uppercase";
//  lesP[3].style.textTransform = "uppercase";
//  lesP[4].style.textTransform = "uppercase";

 // lorsqu'il y'a enormément
 for (let i = 0;i<lesP.length; i++) {

    lesP[i].style.textTransform = "uppercase";
 }

 // 3éme façon de faire
 // Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.//

 for (let p of lesP){

    p.style.textTransform = "uppercase"

 }




