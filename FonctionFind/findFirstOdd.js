function findFirstOdd(arr) {
    return arr.find(elem => elem % 2 == 1)
}

 // Tests
 console.log(findFirstOdd([1, 3, 7, 4])); // 1
 console.log(findFirstOdd([0, 3, 5])); // 3
 console.log(findFirstOdd([2, 4, 6])); // undefined
 