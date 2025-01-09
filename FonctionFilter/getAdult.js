function getAdults(ages) {
    return ages.filter(myfilter)
  }
function myfilter(toto){
  return toto >= 18
}
  // Tests
  console.log(getAdults([16, 18, 20, 15, 22])); // [18, 20, 22]
  console.log(getAdults([12, 15, 17])); // []
  console.log(getAdults([21, 25, 30])); // [21, 25, 30]