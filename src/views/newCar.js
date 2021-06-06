import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Market Car | Gratulacje");
    }

    async getHtml() {
    return `
   <h2>nowe auto</h2>
    `;
}

}