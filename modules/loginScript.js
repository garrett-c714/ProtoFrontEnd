import {Backend} from './backend.js';
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
