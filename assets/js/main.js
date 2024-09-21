'use strict';

let form = document.forms.reg;
// let emailInput = form.elements.email;
// let passwordInput = form.elements.password;
let nameInput = form.elements.name;
let yearInput = form.elements.year;

form.addEventListener('submit', userReg);

let flag = true;
let user;
function userReg(event){
    event.preventDefault();
    // emailError.innerHTML = '';
    // passwordError.innerHTML = '';
    nameError.innerHTML = '';
    yearError.innerHTML = '';
    flag = true;
    // if(passwordInput.classList.contains('error_input')){
    //     passwordInput.classList.remove('error_input');
    // }
    // if(emailInput.classList.contains('error_input')){
    //     emailInput.classList.remove('error_input');
    // }
    if(nameInput.classList.contains('error_input')){
        nameInput.classList.remove('error_input');
    }
    if(yearInput.classList.contains('error_input')){
        yearInput.classList.remove('error_input');
    }
    // if(!emailInput.value){
    //     emailError.innerHTML = 'Введите почту';
    //     emailInput.classList.add('error_input');
    //     flag = false;
    // }
    // if(!passwordInput.value){
    //     passwordError.innerHTML = 'Введите пароль';
    //     passwordInput.classList.add('error_input');
    //     flag = false;
    // }
    if(!nameInput.value){
        nameError.innerHTML = 'Введите имя';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if(nameInput.value.length < 2 && nameInput.value.length > 0){
        nameError.innerHTML = 'Имя должно содержать минимум 2 символа';
        nameInput.classList.add('error_input');
        flag = false;
    }

    if(!yearInput.value){
        yearError.innerHTML = 'Введите год рождения';
        yearInput.classList.add('error_input');
        flag = false;
    }
    // if(isNaN(yearInput)){
    //     yearError.innerHTML = 'Введите число';
    //     yearInput.classList.add('error_input');
    //     flag = false;
    // }
    if(yearInput.value.length != 4 && yearInput.value.length > 0){
        yearError.innerHTML = 'Год рождения содержит 4 символа';
        yearInput.classList.add('error_input');
        flag = false;
    }
    if(yearInput.value > 2006){
        yearError.innerHTML = 'Вам нет 18';
        yearInput.classList.add('error_input');
        flag = false;
    }

    if(flag){
        user = nameInput.value;
        userName.innerHTML = `Здравствуйте, ${user}`;
    }
}

form.elements.check.checked = true;

// emailInput.onblur = function()
// {
//     if(!emailInput.value.includes('@')){
//         this.classList.add('error_input');
//         emailError.innerHTML = 'Неверный формат почты';
//     }
// }
// emailInput.onfocus = function(){
//     if(this.classList.contains('error_input')){
//         this.classList.remove('error_input');
//         emailError.innerHTML = '';
//     }
// }
nameInput.onfocus = function(){
    if(this.classList.contains('error_input')){
        this.classList.remove('error_input');
        nameError.innerHTML = '';
    }
}

// passwordInput.onchange = function(){
//     if(passwordInput.value.length<5){
//         passwordInput.classList.add('error_input');
//         passwordError.innerHTML = 'Пароль должен содержать минимум 5 символов';
//     }else{
//         passwordInput.classList.remove('error_input');
//         passwordError.innerHTML = '';
//     }
// }

// yearInput.onchange = function(){
//     if(yearInput.value.length !=4 && yearInput.value.length > 0){
//         yearInput.classList.add('error_input');
//         yearError.innerHTML = 'Год рождения содержит 4 символа';
//     }else{
//         yaerInput.classList.remove('error_input');
//         yearError.innerHTML = '';
//     }
// }