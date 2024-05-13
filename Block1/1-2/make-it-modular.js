// Importiere das mymodule-Modul, das die Funktion zur Dateifilterung enthält
const mymodule = require("./mymodule");

// Speichere den Verzeichnispfad, der als erstes Befehlszeilenargument übergeben wurde
const directory = process.argv[2];

// Speichere die Dateierweiterung, die als zweites Befehlszeilenargument übergeben wurde
const extension = process.argv[3];

// Rufe die Funktion aus dem mymodule-Modul auf, um den Verzeichnisinhalt zu lesen und zu filtern
mymodule(directory, extension, function (err, files) {
  // Überprüfe, ob ein Fehler aufgetreten ist
  if (err) {
    // Falls ein Fehler auftritt, gebe eine Fehlermeldung auf der Konsole aus und beende das Programm
    return console.error("Error:", err);
  }

  // Durchlaufe die gefilterte Liste von Dateien
  files.forEach(function (file) {
    // Gebe den Dateinamen auf der Konsole aus
    console.log(file);
  });
});
