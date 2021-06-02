import view from "./view.js";


export default class extends view {
    constructor(params) {
        super(params);
        this.setTitle("Kup");
    }

    async getHtml() {
    return `
   <h2>KUP</h2>
    `;
}

}