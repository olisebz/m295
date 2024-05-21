const express = require('express');

const app = express();

app.use(express.json());

app.get('/public', (req, res) => {
  res.send('This is a public endpoint');
});

// Private endpoint
app.get('/private', (req, res) => {
  const { username, password } = req.headers;

  if (username === 'zli' && password === 'zli1234') {
    res.send('This is a private endpoint');
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});