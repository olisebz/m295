/*Erstellen Sie eine Funktion, die mit Hilfe von Promises den Inhalt einer Datei ausliest und dann dessen Länge ausgibt.

Verwenden Sie das fs Modul von Node.js mit const fs = require('node:fs');
Schreiben Sie eine Funktion leseDateiInhalt(filepath).
Die Funktion soll den Dateiinhalt als Promise zurückgeben.
Verarbeiten Sie die Promise, um die Länge des Dateiinhalts auszugeben.
 */

const fs = require('fs');

function leseDateiInhalt(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

leseDateiInhalt("/Users/oliver/Development/UEK295/uebungen/promises.js")
.then(result => {console.log(result.length);})
.catch(error => {console.log(error);})