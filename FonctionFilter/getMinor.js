function getMinor(arr) {
   return arr.filter(elem => elem = 18)

}

//Test
 console.log(getMinor([0, 15 , 18 , 25])); // [0, 15]
 console.log(getMinor([18, 25, 45 , 50])); // []
 console.log(getMinor([0, 1, 2])) // [0, 1, 2]