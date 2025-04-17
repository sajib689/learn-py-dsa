// const arr = [1, 2, 3, 4, 5];

// const evenNumber = arr.filter((num) => num % 2 === 0);


Array.prototype.filter = function () {
    let arr = []
    for (i =0; i < this.length; i++) {
        if (this[i] % 2 === 1) {
            arr.push(this[i])
        }
    }
    return arr
}
console.log([2, 4, 8 , 1, 11, 12].filter())