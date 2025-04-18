
const computer = function (brand, model, year) {
    this.brand = '';
    this.model = '';
    this.year = '';
    aboutComputer () {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
}
let hp = Object.create(computer);
hp.brand = 'HP';
hp.model = 'Pavilion';
hp.year = 2020;
console.log(hp);