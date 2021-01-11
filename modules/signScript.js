import {Backend} from './backend.js';
const signUp = document.querySelector('#sign-up-form');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const email = document.querySelector('#email');
const pass = document.querySelector('#newPass');
const confirmPass = document.querySelector('#confirmPass');
const passwords = document.querySelectorAll('.passbox');
const button = document.querySelector('#submit-button');
const title = document.querySelector('h1');
const API = new Backend;
API.setBaseUrl('http://127.0.0.1:3000');

title.addEventListener('click', () => {
    console.log('yeet');
});

passwords.forEach(box => {
    box.addEventListener('keyup', () => {
        if (passwords[0].value === passwords[1].value) {
            signUp.classList.remove('red');
        } else {
            signUp.classList.add('red');
            button.disabled = true;
        }
    });
});
signUp.addEventListener('keyup', () => {
    if (fName.value && lName.value && email.validity.valid && passwords[0].value === passwords[1].value && email.value && passwords[0].value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});
signUp.addEventListener('submit', event => {
    event.preventDefault();
    title.classList.toggle('green');
    API.post('/login/new', {
        fName: `${fName.value.trim()}`,
        lName: `${lName.value.trim()}`,
        email: `${email.value.trim()}`,
        password: `${pass.value.trim()}`
    })
    .then(data => {
        if (data.success) {
            signUp.classList.remove('red');
            window.location.href = 'index.html';
        } else {
            signUp.classList.add('red');
        }
    });
});