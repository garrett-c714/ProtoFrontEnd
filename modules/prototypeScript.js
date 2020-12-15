import {Backend} from './backend.js';
//import {TestTemplate} from './customElements.js';
try {
const signUp = document.querySelector('#sign-up-form');
const signEmail = document.querySelector('#email');
const signPass = document.querySelector('#newPass');;
const signUser = document.querySelector('#newUser');
const confirmPass = document.querySelector('#confirmPass');
const title = document.querySelector('h1');
const api = new Backend();
api.setDefaultUrl('yeeeet.com');
console.log(api.getDefaultUrl());
signUp.addEventListener('submit' , event => {
    event.preventDefault();
    title.classList.toggle('green');
    console.log(`${signEmail.value}, ${signPass.value}, ${signUser.value}, ${confirmPass.value}`);
});
title.addEventListener('click', () => {
    console.log('yeet');
});
} catch(error) {
    console.log('Caught SignUp Errors');
}

//Login Below
try {
const loginForm = document.querySelector('#login-form');
const user = document.querySelector('#user');
const password = document.querySelector('#pass');
const loginTitle = document.querySelector('h1');

loginForm.addEventListener('submit' , event => {
    event.preventDefault();
    loginTitle.classList.toggle('green');
    console.log(`${user.value}, ${password.value}`);
});
loginTitle.addEventListener('click' , () => {
    console.log('yeet');
});
} catch(error) {
    console.log('Caught Login Errors');
}
//Shadow DOM Experimentation
try {
    window.customElements.define('test-template' , TestTemplate);
} catch(error) {
    console.log('shadow insertion failed');
}