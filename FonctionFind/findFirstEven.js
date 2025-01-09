function findFirstEven(arr) {
  return arr.find(elem => elem % 2 == 0) 
  }
  
  // Tests
  console.log(findFirstEven([1, 3, 7, 4])); // 4
  console.log(findFirstEven([1, 3, 5])); // undefined
  console.log(findFirstEven([2, 4, 6])); // 2
  