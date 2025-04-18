const HouseRent = function (rent, months) {
  this.rent = rent;
  this.months = months;
}

HouseRent.prototype.calculateTotalRent = function () {
  return this.rent * this.months;
}

console.log(new HouseRent(1000, 12).calculateTotalRent()) // 12000