/*Write a program that accepts one or more numbers as command-line arguments
  and prints the sum of those numbers to the console (stdout).
*/
//console.log(process.argv);
let index = 2;
let sum = 0;
while (index < process.argv.length) {
  sum += Number(process.argv[index]);
  index++;
}
console.log(sum);
