function findAverage(array) {
    if (array.length > 0) {
      const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      return average = sum / array.length
    }
    else { 
      return 0
      }
  }