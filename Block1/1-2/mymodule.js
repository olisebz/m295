// Importiere das fs-Modul für Dateioperationen
const fs = require("fs");
// Importiere das path-Modul für Pfadoperationen
const path = require("path");

// Exportiere eine Funktion, die den Verzeichnisinhalt liest und filtert
module.exports = function (directory, extension, callback) {
  // Lese den Inhalt des Verzeichnisses
  fs.readdir(directory, function (err, files) {
    // Überprüfe, ob ein Fehler aufgetreten ist
    if (err) {
      // Falls ein Fehler auftritt, rufe die Callback-Funktion mit dem Fehler auf
      return callback(err);
    }

    // Filtere die Dateien nach der angegebenen Dateierweiterung
    const filteredFiles = files.filter(function (file) {
      // Überprüfe, ob die Dateierweiterung mit der angegebenen übereinstimmt
      return path.extname(file) === "." + extension;
    });

    // Rufe die Callback-Funktion mit der gefilterten Liste von Dateien auf
    callback(null, filteredFiles);
  });
};
// Path: mymodule.js
