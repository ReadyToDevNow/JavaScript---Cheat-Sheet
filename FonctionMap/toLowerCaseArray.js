function toLowerCaseArray(arr) {
    return arr.map(arr => arr.toLowerCase())
}

//test
console.log(toLowerCaseArray(["TEST"]))
console.log(toLowerCaseArray(['HELLO', 'world'])); // ['HELLO', 'WORLD']
console.log(toLowerCaseArray(['JAvaScriPt', 'iS', 'fuN'])); // ['JAVASCRIPT', 'IS', 'FUN']
