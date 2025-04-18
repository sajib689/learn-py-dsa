const HouseRent = function (rent, months) {
  this.rent = rent;
  this.months = months;
}

HouseRent.prototype.calculateTotalRent = function () {
  return `In this month, you will pay ${this.rent} for ${this.months} months. Total rent is ${this.rent * this.months}`;
}

// console.log(new HouseRent(1000, 12).calculateTotalRent()) // 12000

const HouseRent2 = function (amount) {
    this.amount = amount;
}
HouseRent2.prototype.incrementYearly = function () {
    this.amount += 499;
    return `Next year, you will pay ${this.amount} for rent.`;
}
const myHouse = new HouseRent2(500);

console.log(myHouse.incrementYearly());
console.log(myHouse.incrementYearly());
console.log(myHouse.incrementYearly());