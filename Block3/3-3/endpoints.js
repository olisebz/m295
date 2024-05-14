const express = require('express');
const fs = require('fs');
const { request } = require('http');

const app = express();
const port = 3000;

const names = [
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

app.get('/now', (request, response) => {
  response.send(new Date().toLocaleString("de-CH"));
});

app.get('/zli', (request, response) => {
  response.redirect('https://www.zli.ch');
});

app.get('/name', (request, response) => {
  const randomIndex = Math.floor(Math.random() * names.length);
  response.send(names[randomIndex]);
});

app.get('/html', (request, response) => {
  fs.readFile('/Users/oliver/Development/UEK295/Block3/3-3/index.html', 'utf8', (error, data) => {
    if (error) {
      response.status(500).send('Fehler beim Lesen der Datei');
    } else {
      response.send(data);
    }
  } );
});

app.get('/image', (request, response) => {
  fs.readFile('/Users/oliver/Development/UEK295/Block3/3-3/image.jpeg', (error, data) => {
    if (error) {
      response.status(500).send('Fehler beim Lesen der Datei');
    } else {
      response.contentType('image/jpeg');
      response.send(data);
    }
  });
})

app.get('/teapot', (request, response) => {
  response.status(418).send('Status 418');
});

app.get('/user-agent', (request, response) => {
  const userAgent = request.headers['user-agent'];
  response.send('User-Agent:' + userAgent);
});
//User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36
app.get('/secret', (reaquest, response) => {
  response.status(403).send('Forbidden');
});

app.get('/xml', (request, response) => {
  response.sendFile('/Users/oliver/Development/UEK295/Block3/3-3/oliver_profile.xml');
});

app.get('/me', (request, response) => {
  const userInfo = {
      "Vorname": "Oliver",
      "Nachname": "Mustermann",
      "Alter": 17,
      "Wohnort": "Schweiz",
      "Augenfarbe": "Blau"
  };
  response.send(userInfo);
});

app.listen(port, () => {
  console.log(`Beispiel-App hört auf Port ${port}`);
});