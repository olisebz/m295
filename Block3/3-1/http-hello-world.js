const express = require('express');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hallo Welt!');
});

app.listen(port, () => {
  console.log(`Beispiel-App hört auf Port ${port}`);
});