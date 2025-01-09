function sumArray(arr) {
    const initialValue = 0;
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue )
  
  }
  
  // Tests
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([10, -10, 5])); // 5
  console.log(sumArray([])); // 0
  