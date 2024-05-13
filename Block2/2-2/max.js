function maxNumber(numbers) {
  return new Promise((resolve, reject) => {
    if(numbers.length == 0) {
      reject('Error keine Zahlen.');
    }
    let maxNum = 0;
    numbers.forEach(number => {
      maxNum = Math.max(number, maxNum)
    });
    resolve(maxNum);
  })
}

maxNumber([])
.then(result => console.log('Max =', result))
.catch(error => console.log(error));
