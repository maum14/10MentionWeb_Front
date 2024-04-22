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
               break;
         
      }


   })

    //Validation du formulaire 

    let form = document.querySelector('#form');
    let username = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password2 = document.querySelector('#password2');

   form.addEventListener('submit', (event)=>{

      event.preventDefault();//Une méthode utilisée dans les évenement Javascript pour empêcher le comprotemetn par défaut associé  ànu évenement de se produire.
      formVerif();
   })

   function formVerif(){

      // trim() en Js est utilisée pour supprimer les espaces blanc début et à ma fin d'une chaine de caratères
      let usernameValue = username.value.trim();
      let emailValue = email.value.trim(); 
      let passwordValue = password.value.trim(); 
      let password2 = password2.value.trim(); 

      if (usernameValue.length < 2) {

         console.log('ok');
         
      } else {

         console.log(usernamevalue.length);
         
      }
   }

