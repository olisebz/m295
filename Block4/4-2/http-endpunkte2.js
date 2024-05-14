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

//delete name
app.delete('/names', (request, response) => {
  const nameOfDelete = request.query.name;
  const NameIndex = list.indexOf(nameOfDelete);
  if (NameIndex > -1) {
    list.splice(NameIndex, 1);
    response.send('Name deleted');
  } else {
    response.send('Name not found');
  }
  respond.send(list);
});

//schwierigkeiten gehabt
app.get('/secret2', (request, response) => {
  const authHeader = request.headers.authorization;
  if (authHeader === 'Basic aGFja2VyOjEyMzQ=') {
    response.sendStatus(200);
  } else {
    response.sendStatus(401);
  }
});

app.get('/chuck', (request, response) => {
  const name = request.query.name || 'Chuck Norris';
  fetch(`https://api.chucknorris.io/jokes/random?name=${name}`)
    .then(res => res.json())
    .then(data => {
      const joke = data.value.replace('Chuck Norris', name);
      response.send(joke);
    })
    .catch(error => {
      console.error(error);
      response.sendStatus(500);
    });
});

app.patch('/me', (request, response) => {
  const updatedData = request.body;
  Object.assign(me, updatedData);
  response.send('Data updated');
});


app.listen(port, () => {
  console.log(`Beispiel-App hört auf Port ${port}`);
});