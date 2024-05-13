
let numbers = [1, 7, 3, 8, 2];

let maxNum = 0;


numbers.forEach(number => {
  console.log("maxNum = ", maxNum, "; number = ", number);
  maxNum = Math.max(maxNum, number);
});

console.log("Max = ", maxNum);
