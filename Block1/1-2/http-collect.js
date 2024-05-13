// Erforderliche Module importieren
const http = require("http"); // Modul für HTTP-Anfragen
const bl = require("bl"); // Modul zum Sammeln von Datenströmen

// HTTP GET-Anfrage an die angegebene URL senden
http.get(process.argv[2], function (response) {
  // Datenstrom der Antwort durch das bl-Modul leiten, um Daten zu sammeln
  response.pipe(
    bl(function (err, data) {
      // Fehlerbehandlung, falls ein Fehler beim Sammeln der Daten auftritt
      if (err) {
        return console.error(err);
      }
      // Daten vom Puffer in einen lesbaren String konvertieren
      data = data.toString();
      // Länge der empfangenen Daten ausgeben
      console.log(data.length);
      // Vollständige empfangene Daten auf der Konsole ausgeben
      console.log(data);
    })
  );
});
