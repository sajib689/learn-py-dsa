// class expretion

const Person = class {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// class declaration
class Person2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Computer {
    constructor(brand, ram, storage, processor, price, color) {
        this.brand = brand;
        this.ram = ram;
        this.storage = storage;
        this.processor = processor;
        this.color = color;
        this.price = price;
    }
    getDetails() {
        return `Brand: ${this.brand}, RAM: ${this.ram}, Storage: ${this.storage}, Processor: ${this.processor}, Color: ${this.color}, Price: $${this.price}`;
    }
}
const hp = new Computer('HP', '16GB', '512GB SSD', 'Intel i7', 'Silver', 1200);
const dell = new Computer('Dell', '16GB', '1TB HDD', 'Intel i5', 'Black', 900);
console.log(hp);
console.log(dell);
console.log(hp.getDetails());
console.log(dell.getDetails());