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
titre.style.backgroundColor = " pink "

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
 // Selection via queryselector (selecitonne le premier élément trouvé)


// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.
 let div = document.querySelector('div');
 console.log(div);
 div.style.border = "solid 1px #000"

// Selection via queryselectorAll() (selectionne tous les éléments trouvés)
// sélectionne toutes les balises en ensemble et retourne un array d'éléments

let query = document.querySelectorAll('.selecteClass');
console.log(query); // on a 3 paragrapphe qui ont la classe selectClass
for (let i = 0; i < query.length; i++) {
  console.log(query[i].innerHTML);
   
}
//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector(".bg-success p");
rajout.innerHTML = "Je suis là";

// CREATION D'UN NOUVEL ELEMENT

let section = document.querySelector('section');
// pour créer un élément , nous utilisons la méthode createElement
// (), puis nous l'intégrons dans le noeud souhaité
let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe à la fin de la section </strong>";
nouveauParaFin.style.color = "red";

section.append(nouveauParaFin);// append() -> insère du contenu à la fin de la section.//append() accepte tous les éléments (balise ou string).

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe au début de la section </strong>";
nouveauParaDebut.style.color = "green";

section.prepend(nouveauParaDebut); // prepend() -> insère du contenu au début de la section

//DEPLACER UN ELEMENT

// pour deplacer un élément il faut 3 paramètres
   /* 
      * -> le parent qui vas acceuillir l'élément
      * -> l'élément à déplacer
      * -> l'élémént qui vient aprés
   */
  let parent = document.querySelector('main');
  let jeBouge = document.querySelector('h4');
  let h2 = document.querySelector ('.subtitle');

  parent.insertBefore(jeBouge,h2);

  //SUPPRIMER UN ELEMENT 

  // Pour supprimer un élément, il faut deux paramètres :
   //Pour supprimer un élément, il faut deux paramètres:
   /**
    *  -> le parent
    * -> l'élément à supprimer
    */

   let ul = document.querySelector('ul');
   let li = document.querySelector('ul :nth-child(2)');
   //let li = document.getElementsByTagName('li)[1];
   console.log(li)
  // Pour supprimer, on utilise .removeChild()
   ul.removeChild(li);

  //CREER UN ATTRIBUT ET SA VALEUR

  //setAttribute() : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément
   
  let baliseA = document.querySelector('a');
  baliseA.setAttribute("attribut", "valeurAttribut"); // je rajoute un atribut à la balise a

  baliseA.setAttribute("href", "01_introduction.html"); // changer la valeur de l'attribut href

  // Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.
let baliseB = document.querySelector('h1');
let docJs = document.createElement('a');
docJs.innerHTML = "Lien vers la documentation";
docJs.style.color = "white";
docJs.style.textDecoration = "none";

baliseB.append(docJs);
docJs.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/JavaScript");
docJs.setAttribute("target","_blank")

// 2éme façon 
container.innerHTML = "<a> Cours JavaScript </a>";
let element = document.querySelector('h1 a');
element.setAttribute('href', 'le lien');
element.setAttribute("target", '_blank');
element.style.color= "white";
element.style.textDecoration="none";


//3ème façon

container.innerHTML="<a a href = ' # 'target='_blank' > Cour JavaScript </a>";
let element = document.querySelector('h1 a');
element.style.color= "white";
element.style.textDecoration= "none";









// CRÉER UN ATTRIBUT ET SA VALEUR
// setAttribute() : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément


let lesA = document.querySelectorAll('a');

let valeurA = lesA[3].getAttribute('href'); // ici je récupère la valeur de l'attribut href avec le getAttribute()
console.log(valeurA);