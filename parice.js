const HouseRent = function (rent, months) {
  this.rent = rent;
  this.months = months;
}

HouseRent.prototype.calculateTotalRent = function () {
  return `In this month, you will pay ${this.rent} for ${this.months} months. Total rent is ${this.rent * this.months}`;
}

console.log(new HouseRent(1000, 12).calculateTotalRent()) // 12000

