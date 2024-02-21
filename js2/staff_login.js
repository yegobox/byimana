let form_register = document.querySelector('.register_form');
let email = document.querySelector('.email');

form_register.addEventListener(onsubmit,(e)=>{
    email.value = '';
})