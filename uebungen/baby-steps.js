let index = 2;
let sum = 0;
while (index < process.argv.length) {
  sum += Number(process.argv[index]);
  index++;
}
console.log(sum);
