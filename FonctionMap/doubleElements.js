function doubleElements(arr) {
    return arr.map(elem => elem * elem)

}
// Tests
// Si j'ai bien compris arr = tableau | elem = chaque éléments du tableau
console.log(doubleElements([1 + 2, 2+2, 3])); // [6, 8, 6]
console.log(doubleElements([0, -1, 5])); // [0, -2, 10]
console.log(doubleElements([10, 20, 30])); // [20, 40, 60]