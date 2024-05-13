const fs = require("fs");

// Die vollständige Pfadangabe zur zu lesenden Datei wird als erstes Befehlszeilenargument übergeben
const filePath = process.argv[2];

// Asynchrone Dateileseoperation
fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    return console.error(err);
  }

  // Die Anzahl der Zeilenumbrüche zählen
  const newlineCount = data.split("\n").length - 1;

  // Die Anzahl der Zeilenumbrüche auf der Konsole ausgeben
  console.log(newlineCount);
});
