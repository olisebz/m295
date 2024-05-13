// Diese Zeile importiert das Modul 'express' und weist es der Konstanten 'express' zu.
const express = require('express');

// Hier wird eine Express-Anwendung erstellt und der Konstanten 'app' zugewiesen.
const app = express();

// Diese Zeile definiert den Port, auf dem der Server lauschen wird, und weist ihm den Wert 3000 zu.
const port = 3000;

// Hier wird eine GET-Route definiert, die auf der Wurzel-URL ('/') antwortet.
app.get('/', (request, response) => {
  // Wenn ein Benutzer eine Anfrage an die Wurzel-URL sendet, wird 'Hallo Welt!' als Antwort gesendet.
  response.send('Hallo Welt!');
  response.header("Content-Type", "text/plain");
});

// Diese Zeile startet den Server und lässt ihn auf Verbindungen auf dem angegebenen Port lauschen.
app.listen(port, () => {
  // Sobald der Server gestartet ist, wird diese Funktion aufgerufen und gibt eine Nachricht aus, die den Port angibt.
  console.log(`Beispiel-App hört auf Port ${port}`);
});
