export class TestTemplate extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        const template = document.querySelector('#test-template');
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log('connected');
    }
}
console.log('why does this not work');
window.customElements.define('test-template', TestTemplate);