
// class Computer {
//     constructor(brand, ram, storage, processor, price, color) {
//         this.brand = brand;
//         this.ram = ram;
//         this.storage = storage;
//         this.processor = processor;
//         this.color = color;
//         this.price = price;
//     }
//     getDetails() {
//         return `Brand: ${this.brand}, RAM: ${this.ram}, Storage: ${this.storage}, Processor: ${this.processor}, Color: ${this.color}, Price: $${this.price}`;
//     }
// }

// let hp = new Computer('HP', '16GB', '512GB SSD', 'Intel i7', 1200, 'Silver');
// let dell = new Computer('Dell', '16GB', '1TB HDD', 'Intel i5', 900, 'Black');
// dell.getDetails();

class Computer {
    constructor(name, model, warenty) {
        this.name = name;
        this.model = model;
        this.warenty = warenty;
    }
}

class Laptop extends Computer {
    constructor(name, model, warenty, batteryLife) {
        super(name, model, warenty); // ✅ This is correct
        this.batteryLife = batteryLife;
    }
    useComputer(value) {
        return `Warenty avilable: ${(this.warenty * 12) - value} months`;
    }
    getDetails() {
        return `Name: ${this.name}, Model: ${this.model}, Warenty: ${this.warenty}, Battery Life: ${this.batteryLife}`;
    }
}

let dell = new Laptop('Dell', 'Inspiron', 2, '10 hours');
let hp = new Laptop('HP', 'Pavilion', '1 year', '8 hours');

console.log(dell.useComputer(6));
// console.log(hp.getDetails());
