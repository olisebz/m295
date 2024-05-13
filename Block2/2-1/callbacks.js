function duplicate(number, callback) {
  callback(number * 2);
}

duplicate(5, function(result) {
  console.log('Das Ergebnis ist:', result);
});


function select(number, positive, negative) {
  if (number >= 0) {
    positive(number);
  } else {
    negative(number);
  }
}

select(9, number => console.log('groesser'), number => console.log('kleiner'));
select(-7, number => console.log('groesser'), number => console.log('kleiner'));
