// Importiere das http-Modul für die HTTP-Anfragen
const http = require("http");

// Speichere die URL, die als erstes Befehlszeilenargument übergeben wurde
const url = process.argv[2];
//console.log(url);
//"http://localhost:55449"

// Führe eine HTTP GET-Anfrage an die angegebene URL durch
http.get(url, function (response) {
  // Setze die Zeichenkodierung der Antwort auf 'utf8', um Strings zu erhalten
  response.setEncoding("utf8");

  // Höre auf das 'data'-Ereignis, das auftritt, wenn Daten von der Antwort empfangen werden
  response.on("data", function (data) {
    // Gib den Dateninhalt auf der Konsole aus
    console.log(data);
  });

  // Höre auf das 'error'-Ereignis, das auftritt, wenn ein Fehler bei der Anfrage auftritt
  response.on("error", function (error) {
    // Gib den Fehler auf der Konsole aus
    console.error("Error:", error);
  });
});
