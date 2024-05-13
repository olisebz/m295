/*Erstellen Sie eine Funktion, die eine Zahl verdoppelt und das Ergebnis an eine Callback-Funktion übergibt.
Schreiben Sie eine Funktion verdoppeln(zahl, callback).
Die Funktion soll zahl verdoppeln.
Anschliessend soll die callback-Funktion aufgerufen werden.
Die callback-Funktion soll das Ergebnis ausgeben:
verdoppeln(5, function(ergebnis) {
  console.log('Das Ergebnis ist:', ergebnis);
}); */

function duplicate(number, callback) {
  callback(number * 2);
}

duplicate(5, result => {
  console.log('Das Ergebnis ist:', result);
})