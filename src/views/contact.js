import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Kontakt");
    }

    async getHtml() {
    return `
   <h2>kontakt</h2>
    `;
}

}