import {Backend} from './backend.js';
const loginForm = document.querySelector('#login-form');
const user = document.querySelector('#user');
const password = document.querySelector('#pass');
const loginTitle = document.querySelector('h1');
const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');
    


window.onload = () => {
    fetch('http://127.0.0.1:5000')
    .then(response => {
        console.log(response);
    })
}

loginForm.addEventListener('submit' , event => {
    event.preventDefault();
    loginTitle.classList.toggle('green');
    API.post('/login', {
        email: `${user.value}`,
        pass: `${password.value}`
    }).then(response => {
        if (response.success == 'true') {
            window.location.href = 'index.html';
        } else if (response.success == 'false') {
            loginForm.classList.toggle('red');
        } else {
            console.log('unreachable condition');
            console.log(response);
        }
    })
    .catch(error => {
        console.log(error);
        loginTitle.classList.toggle('red');
    })
});
loginTitle.addEventListener('click' , () => {
    console.log('yeet');
});