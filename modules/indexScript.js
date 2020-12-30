import {Backend} from './backend.js';
const queryForm = document.querySelector('#query');
const textfield = document.querySelector('#query-endpoint');
const landing = document.querySelector('#landing');
const title = document.querySelector('h1');
const API = new Backend();
API.setDefaultUrl('http://127.0.0.1:8000');
queryForm.addEventListener('submit' , event => {
    event.preventDefault();
    API.get(`/${textfield.value}`)
    .then(data => {
        landing.textContent = JSON.stringify(data);
        console.log(data);
    });
});
title.addEventListener('click' , () => {
    title.classList.toggle('green');
})