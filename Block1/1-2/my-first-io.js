// Import the 'fs' module for file system operations
const fs = require("fs");

// Get the file path from the command-line arguments
// Dateipfad aus den Befehlszeilenargumenten erhalten
const filePath = process.argv[2];

// Read the content of the file synchronously using 'readFileSync'
// Inhalt der Datei synchron lesen
const fileContent = fs.readFileSync(filePath, "utf8");

// Count the number of newline characters to determine the number of lines
// Anzahl der Zeilenumbrüche zählen
const newlineCount = fileContent.split("\n").length - 1;

// Output the number of lines to the console
// Ausgabe der Anzahl der Zeilenumbrüche
console.log(newlineCount);
