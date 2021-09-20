export default class bArray {
    constructor() {
        this._elements = [];
    }

    filter(element) {
        for(let i=0; i < this._elements.length; i++) {
            if(!element(this._elements[i])) {
                this.removeByIndex(i);
            }
        }
    }
}