import {Backend} from './backend.js';
const queryForm = document.querySelector('#query');
const textfield = document.querySelector('#query-endpoint');
const landing = document.querySelector('#landing');
const API = new Backend();
API.setDefaultUrl('http://127.0.0.1:8000');
queryForm.addEventListener('submit' , event => {
    event.preventDefault();
    API.get(`/${textfield.value}`)
    .then(data => {
        landing.textContent = 'uh';
    });
});