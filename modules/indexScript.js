import {Backend} from './backend.js';
const queryForm = document.querySelector('#query');
const textfield = document.querySelector('#query-endpoint');
const landing = document.querySelector('#landing');
const title = document.querySelector('h1');
const cookieButton = document.querySelector('#query-button');
const setCookie = document.querySelector('#set-cookie');
const sendCookies = document.querySelector('#send-cookies');
const API = new Backend();
API.setBaseUrl('http://127.0.0.1:5000');

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
    document.cookie = "test=Cookie; domain=http://127.0.0.1:5000";
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