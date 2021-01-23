import {Backend} from './backend.js';
const queryForm = document.querySelector('#query');
const textfield = document.querySelector('#query-endpoint');
const landing = document.querySelector('#landing');
const title = document.querySelector('h1');
const cookieButton = document.querySelector('#query-button');
const setCookie = document.querySelector('#set-cookie');
const sendCookies = document.querySelector('#send-cookies');
const loginSpan = document.querySelector('#logged-in');
const logOut = document.querySelector('#log-out-button');
const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');



window.onload = () => {
    console.log('what 2');
   API.get('/login/v')
   .then(response => {
       console.log(response);
       console.log('what');
       if (response.session == 'true') {
           loginSpan.textContent = `${response.firstName} ${response.lastName}`;
       } else {
           loginSpan.textContent = 'no user logged in';
       }
   });
}

queryForm.addEventListener('submit' , event => {
    event.preventDefault();
    API.get(`/${textfield.value}`)
    .then(data => {
        landing.textContent = JSON.stringify(data);
        console.log(data);
    });
});
cookieButton.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/cookie', {
        credentials: 'include'
    })
    .then(data => {
        landing.textContent = JSON.stringify(data);
        console.log(data);
    })
});
setCookie.addEventListener('click', () => {
    document.cookie = "test=Cookie";
    landing.textContent = "cookie set";
});
sendCookies.addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/cookie/read', {
        credentials: 'include'
    })
    .then(data => {
        title.classList.toggle('green');
    });
});
title.addEventListener('click' , () => {
    title.classList.toggle('green');
})

logOut.addEventListener('click' , () => {
    API.get('/logout')
    .then(response => {
        if (response.success == 'true') {
            loginSpan.textContent = "";
        } else {
            title.classList.toggle('red');
        }
    })
});