function findWord(words) {
    return words.find(elem => elem[0] === "J")
  }
  
  // Tests
  console.log(findWord(['apple', 'banana', 'JavaScript'])); // 'JavaScript'
  console.log(findWord(['Python', 'Ruby', 'C++'])); // undefined
  console.log(findWord(['Java', 'HTML', 'CSS'])); // 'Java'

  console.log(findWord(['avaJ', 'HTML', 'CSS'])); // Si elem[0] -> undefined | Si elem[3] -> "Avaj"