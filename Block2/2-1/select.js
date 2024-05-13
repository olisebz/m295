function selection(number, positive, negative) {
  if (number >= 0) {
    positive(number);
  } else {
    negative(number);
  }
}

selection(-1, function(number) {
  console.log("positive number", number);
}, function(number) {
  console.log("negative number", number);
})

selection(1, function(number) {
  console.log("positive number", number);
}, function(number) {
  console.log("negative number", number);
})

//promise to sync await umschreiben,

//fehlerbehandlung mit sync catch,

//code sehen in welcher reihenfolge was passiert

//

