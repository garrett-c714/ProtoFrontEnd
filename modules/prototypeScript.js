import {Backend} from './backend.js';
const API = new Backend();
API.setDefaultUrl('http://localhost:8000');
//Sign Up
try {
const signUp = document.querySelector('#sign-up-form');
const signEmail = document.querySelector('#email');
const signPass = document.querySelector('#newPass');
const signUser = document.querySelector('#newUser');
const confirmPass = document.querySelector('#confirmPass');
const title = document.querySelector('h1');
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
