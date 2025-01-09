function concatStrings(arr) {
   
  return arr.reduce((prev, currentValue) =>  prev + currentValue, '')
  }


  
  // Tests
  console.log(concatStrings(['Hello', ' ', 'world', '!'])); // 'Hello world!'
  console.log(concatStrings(['This', 'is', 'JavaScript'])); // 'ThisisJavaScript'
  console.log(concatStrings([])); // ''
  