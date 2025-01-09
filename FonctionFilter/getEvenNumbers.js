function getEvenNumbers(arr) {
    return arr.filter(elem => elem % 2 == 0 )
}

// Tests nombres pairs 
console.log(getEvenNumbers([1, 2, 3, 4])); // [2, 4]
console.log(getEvenNumbers([5, 7, 9])); // []
console.log(getEvenNumbers([2, 4, 6, 8])); // [2, 4, 6, 8]

