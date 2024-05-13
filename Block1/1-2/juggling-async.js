// Erforderliche Module importieren
const http = require("http"); // Modul für HTTP-Anfragen
const bl = require("bl"); // Modul zum Sammeln von Datenströmen

// Array zum Speichern der empfangenen Daten
const results = [];
// Variable zum Zählen der empfangenen Daten
let counter = 0;

// Funktion zum Ausgeben der empfangenen Daten in der richtigen Reihenfolge
function printResults() {
  // Durchlaufe das results-Array und gebe die gespeicherten Daten aus
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

// Funktion zum Senden von HTTP-GET-Anfragen an die URLs
function httpGet(index) {
  // HTTP-GET-Anfrage an die URL senden
  http.get(process.argv[2 + index], function (response) {
    // Datenstrom der Antwort durch das bl-Modul leiten, um Daten zu sammeln
    response.pipe(
      bl(function (err, data) {
        // Fehlerbehandlung, falls ein Fehler beim Sammeln der Daten auftritt
        if (err) {
          return console.error(err);
        }

        // Daten vom Puffer in einen lesbaren String konvertieren und im results-Array speichern
        results[index] = data.toString();
        // Zählen, wie viele URLs ihre gesamten Daten empfangen haben
        counter++;

        // Wenn alle URLs ihre Daten empfangen haben, Ergebnisse ausgeben
        if (counter === 3) {
          printResults();
        }
      })
    );
  });
}

// HTTP-GET-Anfragen für jede URL senden
for (let i = 0; i < 3; i++) {
  httpGet(i);
}
