export class Backend {
    constructor() {
        this.baseUrl = "";
    }
    setDefaultUrl(url) {
        this.defaultUrl = url;
    }
    getDefaultUrl() {
        return this.defaultUrl;
    }
    get(endpoint) {
        return fetch(`${this.defaultUrl}${endpoint}`)
        .then(response => response.json());
    }
    post(endpoint, data) {
        return fetch(`${this.baseUrl}${endpoint}` , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json());
    }
}