const express = require('express');
const fs = require('fs');
const { request } = require('http');

const app = express();
const port = 3000;

const list = [
  "Oli",
  "Yanis",
  "Nino",
  "Mike",
  "Lebron",
  "Ronaldo",
  "Tim",
  "Jakob",
  "Simon",
  "Julia",
  "Louis",
  "david",
  "Lukas",
  "Sarah",
  "Martin",
  "Emma",
  "Peter",
  "Lisa",
  "Michael",
  "Maria"
];

//Einen Endpunkt GET /now, der die aktuelle Zeit zurück gibt. Per Parameter ?tz= kann die Zeitzone ausgewählt werden (z.B. "Europe/Zurich").
app.get('/now', (request, response) => {
  let timezone = request.query.tz || 'UTC';
  let currentTime = new Date().toLocaleString("de-CH", { timeZone: timezone });
  response.send(currentTime + ' ' + timezone);
});

//Einen Endpunkt POST /names, welcher der Namensliste einen Eintrag hinzufügt. Der Name wird per Form mitgegeben
app.post('/names', (request, response) => {
  console.log(request.query.name)
  let newName = request.query.name;
  list.push(newName);
  response.send('Name added');
});

app.get('/name', (request, response) => {
  response.send(list);
});

app.listen(port, () => {
  console.log(`Beispiel-App hört auf Port ${port}`);
});