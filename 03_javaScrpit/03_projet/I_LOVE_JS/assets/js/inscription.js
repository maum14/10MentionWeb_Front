//-----------------------loader-------------------------//

let loader = document.querySelector('#loader');
window.addEventListener('load', ()=>{
   loader.classList.add('hideLoader');
})
/*
    ╔═════════════════════════════════════════════╗
    ║                   Cookies                   ║
    ╚═════════════════════════════════════════════╝ */



    let bpCookies = document.querySelector(".btn-success");
    let divCookies = document.querySelector(".cookies");
    
    bpCookies.addEventListener('click', ()=> {
      divCookies.style.bottom = "auto";
    })



    let question = document.querySelector(".fa-question");
   let question2 = document.querySelector(".mdp p");

     question.addEventListener('click',() =>{
       question2.classList.toggle('hideLoader')

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


   // Affichage du mot de passe 

   let afficheMdp = document.querySelector('.fa-eye-slash');
   let password = document.querySelector('#password');
   console.log(password.type);
   console.log(password.getAttribute('type'));

   afficheMdp.addEventListener('click', ()=>{
      switch(password.type) {
         case "password":
               // password.setAttribute('type','text')
               password.type = "text";
               afficheMdp.classList.replace('fa-eye-slash','fa-eye');

            break;

            default:
               // password.setAttribute('type','password')
               password.type = "password";
               afficheMdp.classList.replace('fa-eye','fa-eye-slash');
               /* En JavaScript, l'instruction « break; » est utilisée pour terminer l'exécution d'une
               boucle, d'une instruction switch ou d'un bloc étiqueté. */
               break;
         
      }


   })

    //Validation du formulaire 

    let form = document.querySelector('#form');
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password2 = document.querySelector('#password2');
    let message ='';

   form.addEventListener('submit', (event)=>{

      event.preventDefault();//Une méthode utilisée dans les évenement Javascript pour empêcher le comprotemetn par défaut associé  ànu évenement de se produire.
      formVerif();
   })

   function formVerif(){

      // trim() en Js est utilisée pour supprimer les espaces blanc début et à ma fin d'une chaine de caratères
      let usernameValue = username.value.trim();
      let emailValue = email.value.trim(); 
      let passwordValue = password.value.trim(); 
      let password2Value = password2.value.trim(); 

      // Username verify

      if (usernameValue == "") { // je vérifie si le champ username est vide
         //si c'est le cas je définie un message d'erreur approprié
         message = 'Username ne peut être pas vide';
         setError(username , message) ;
         
      }else if(!usernameValue.match(/^[a-zA-Z]+$/)){
         /* La méthode `match()` en JavaScript est utilisée pour faire
       correspondre une chaîne à une expression régulière. Lorsqu'il est
       appelé sur une chaîne, il renvoie un tableau contenant les
       correspondances, ou « null » si aucune correspondance n'est trouvée. */

       /* 
        La méthode `match()` en JavaScript est utilisée pour faire correspondre une chaîne à une expression régulière. Lorsqu'il est appelé sur une chaîne, il renvoie un tableau contenant les correspondances, ou « null » si aucune correspondance n'est trouvée.
                     
     ^ : C'est un ancrage qui indique le début de la chaîne. La correspondance doit commencer au début de la chaîne.
         [a-zA-Z] : C'est une classe de caractères qui correspond à n'importe quelle lettre de l'alphabet anglais, qu'elle soit en minuscule (a-z) ou en majuscule (A-Z).
        + : C'est un quantificateur qui signifie "une ou plusieurs fois". Il indique que la classe de caractères [a-zA-Z] doit apparaître une ou plusieurs fois dans la chaîne.
          $ : C'est un ancrage qui indique la fin de la chaîne. La correspondance doit se terminer à la fin de la chaîne.
      */

       message = "Username n'est pas valide, username doit contenir que des lettres";
       setError(username , message);
       
      } else{
         
         let lengthUsername = usernameValue.length;
         //console.log(lengthUsername);
         if (lengthUsername < 3) {
            message = "Username doit avoir au moins 3 caractères";
            setError(username,message);
            
         } else {
            setSuccess(username);
         }
      }  
      
       // Email verify
      let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
      /*
      - ^: Indique le début de la chaîne.
      - [a-z0-9._-]+: Correspond à une ou plusieurs occurrences de caractères minuscules de l'alphabet (a-z), chiffres (0-9), ou des caractères spéciaux (._-). Ce groupe représente la partie locale de l'adresse e-mail (avant le '@').
      - @: Représente le caractère '@', qui sépare la partie locale du nom de domaine.
      - [a-z0-9._-]{2,}: Correspond à une séquence d'au moins deux caractères parmi les caractères minuscules de l'alphabet, les chiffres, ou les caractères spéciaux (._-). Ceci représente le nom de domaine de niveau supérieur (TLD).
      - \.: Représente le caractère point (".") qui sépare le nom de domaine de niveau supérieur du nom de domaine de premier niveau.
      - [a-z]{2,4}: Correspond à une séquence de 2 à 4 caractères minuscules de l'alphabet, représentant l'extension du nom de domaine de premier niveau (par exemple, "com", "net", "org", etc.).
      - $: Indique la fin de la chaîne.
     */

      if (emailValue == "") { // je vérifie si le champ username est vide
         //si c'est le cas je définie un message d'erreur approprié
         message = 'Email ne peut être pas vide';
         setError(email , message) ;

      }else if (!regexEmail.test(emailValue)){
         message = 'Email n\'est pas valide';
         setError(email , message);

      }else {
         setSuccess(email);
      }

      
       // Password verify

      if (passwordValue == "") { // je vérifie si le champ username est vide
         //si c'est le cas je définie un message d'erreur approprié
         message = 'Password ne peut être pas vide';
         setError(password , message) ;
         
      }
       // Password2 verify

      if (password2Value == "") { // je vérifie si le champ username est vide
         //si c'est le cas je définie un message d'erreur approprié
         message = 'Password2 ne peut être pas vide';
         setError(password2 , message) ;
         
      }

   }

function setError(element, infos){

      let formControl = element.parentElement; // je stock le parent de l'élément qui contient l'erreur (la div avec la classe form-control)
      let small = formControl.querySelector('small');
      // Ajout du message d'erreur
      small.innerText = infos ;

      // formControl.classeName = " form-control error";
      formControl.classList.add('error')
}
function setSuccess(element){

   let formControl = element.parentElement;
   formControl.classList.add('success') ;
   let small = formControl.querySelector('small');
      // Ajout du message d'erreur
      small.innerText = "";
}

