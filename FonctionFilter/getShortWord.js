function getShortWords(words) {
    return words.filter(elem => elem.includes('a'))
  }

  // Tests
  console.log(getShortWords(['apple', 'dog', 'cat', 'banana'])); // ['dog', 'cat']
  console.log(getShortWords(['hello', 'world'])); // []
  console.log(getShortWords(['one', 'two', 'three'])); // ['one', 'two']
  