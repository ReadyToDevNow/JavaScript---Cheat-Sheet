function multiplyArray(arr) {
   const initialValue = 1;
   return arr.reduce(myreduce, initialValue)
  }

function myreduce(toto, tata) {
   return toto * tata
}
  
  // Tests
  console.log(multiplyArray([1, 2, 3, 4])); // 24
  console.log(multiplyArray([2, 5, 0])); // 0
  console.log(multiplyArray([2, 2, 2])); // 8
  