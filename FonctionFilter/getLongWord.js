function getLongWord(arr) {
    return arr.filter(elem => elem.length > 5)
}

// test 
console.log(getLongWord(["test", "congrats", "exemple"])); // ['congrats', 'exemple']
console.log(getLongWord(["testing", "congrats", "exemple"])); // ['testing', 'congrats', 'exemple']
console.log(getLongWord(["test", "con", "ex"])); // []
