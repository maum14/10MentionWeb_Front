// Validation du formulaire 

let form = document.querySelector('#form');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = "";



function setValidation(element, infos = null) {

    let formControl = element.parentElement;

    let small = formControl.querySelector('small');
    if (infos != null) {
        small.innerText = infos;
        form.className = "form-error";
    } else {
        form.className = "form success";
    }


}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    let emailForm = email.Form.trim();
    let subjectForm = subject.Form.trim();
    let messageForm = message.Form.trim();

     let formulaire = [emailForm, subjectForm, messageForm];
     
    //  email verify 


}) 
