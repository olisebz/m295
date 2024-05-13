// Importiere die erforderlichen Module
const fs = require("fs"); // Modul für Dateioperationen
const path = require("path"); // Modul für Pfadoperationen

// Hole den Verzeichnispfad und die Dateierweiterung aus den Befehlszeilenargumenten
const directory = process.argv[2]; // Verzeichnispfad
const extension = "." + process.argv[3]; // Dateierweiterung, mit Punkt vorangestellt

// Verzeichnisinhalt lesen
fs.readdir(directory, function (err, file) {
  // Fehlerbehandlung
  if (err) {
    return console.error(err);
  }

  // Durchlaufe jede Datei im Verzeichnis
  file.forEach(function (file) {
    // Überprüfe, ob die Dateierweiterung der gesuchten entspricht
    if (path.extname(file) === extension) {
      // Gib den Dateinamen aus, wenn die Dateierweiterung übereinstimmt
      console.log(file);
    }
  });
});
