
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