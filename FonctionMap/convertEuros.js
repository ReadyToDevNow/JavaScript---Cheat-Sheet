function toEuros(prices) {
  return prices.map(elem => { 
    if (elem >= 100)
    return "bingo"
    else return elem + 5 }
  )
}

// Tests
// Si j'ai bien compris Prices = tableau | elem = chaque element du tableau 
console.log(toEuros([100, 50, 20])); // [85, 42.5, 17]
console.log(toEuros([1, 5, 10])); // [0.85, 4.25, 8.5]
console.log(toEuros([200])); // [170]
