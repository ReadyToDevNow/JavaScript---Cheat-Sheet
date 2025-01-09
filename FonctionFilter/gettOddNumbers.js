function getOddNumbers(arr) {
    return arr.filter(elem => elem % 2 == 1)
}

//Test nombres impaires
console.log(getOddNumbers([1, 2, 3, 4,])); // [1, 3]
console.log(getOddNumbers([5, 7, 9])); // [5, 7, 9]
console.log(getOddNumbers([2, 4, 6, 8])); // []