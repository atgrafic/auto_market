import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Sprzedaj");
    }

    async getHtml() {
    return `
   <h2>sprzedaj</h2>
    `;
}

}