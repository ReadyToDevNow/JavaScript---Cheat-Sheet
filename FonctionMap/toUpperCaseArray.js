function toUpperCaseArray(words) {
    return words.map(words => words.toUpperCase())
}

// Tests
console.log(toUpperCaseArray(['hello', 'world'])); // ['HELLO', 'WORLD']
console.log(toUpperCaseArray(['javaScript', 'is', 'fun'])); // ['JAVASCRIPT', 'IS', 'FUN']
console.log(toUpperCaseArray(['test'])); // ['TEST']