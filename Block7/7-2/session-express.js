const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.post('/name', (req, res) => {
  const { name } = req.body;
  req.session.name = name;
  res.sendStatus(200);
});

app.get('/name', (req, res) => {
  const name = req.session.name;
  res.send(name);
});

app.delete('/name', (req, res) => {
  delete req.session.name;
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});