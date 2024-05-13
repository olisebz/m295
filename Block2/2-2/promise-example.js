
function numberSum(numbers) {
  return new Promise((resolve, reject) => {
    let sum = 0;
    numbers.forEach(number => {
      sum = sum + number;
      if (number < 0) {
        reject(number);
      }
    });
    resolve(sum);
  });
}
numberSum([1, 2, -3, 4, 5])
.then(sum => {console.log('sum =', sum);})
.catch(err => {console.log('error =', err);});
