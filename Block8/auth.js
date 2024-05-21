const express = require('express');
const app = express.Router();

app.post('/login', (request, response) => {
    request.session.username = request.body.username;
    request.session.password = request.body.password;

    request.session.authetificated = true;
    response.sendStatus(200);
});

app.get('/verify', (request, response) => {
    response.send(request.session);
});

app.delete('/logout', (request, response) => {
    request.session.username = null;
    request.session.password = null;
    request.session.authetificated = null;
    response.sendStatus(204);
});

module.exports = app;