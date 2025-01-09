function findFirstAdult(ages) {
  return ages.find(elem => elem > 18)
  }
  
  // Tests
  console.log(findFirstAdult([16, 17, 19])); // 19
  console.log(findFirstAdult([10, 12, 15])); // undefined
  console.log(findFirstAdult([21, 30, 40])); // 21
  