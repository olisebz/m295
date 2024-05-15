const express = require('express');
const app = express();
const port = 3000;

let books = [
    {"isbn": "978-3-123-45678-9", "title": "Die Abenteuer des Huckleberry Finn", "author": "Mark Twain", "year": 1884},
    {"isbn": "978-3-456-78901-2", "title": "Anna Karenina", "author": "Leo Tolstoy", "year": 1877},
    {"isbn": "978-3-890-12345-6", "title": "Der Graf von Monte Christo", "author": "Alexandre Dumas", "year": 1844},
    {"isbn": "978-3-456-78910-1", "title": "Frankenstein", "author": "Mary Shelley", "year": 1818},
    {"isbn": "978-3-210-11111-1", "title": "Die drei Musketiere", "author": "Alexandre Dumas", "year": 1844},
    {"isbn": "978-3-333-22222-2", "title": "Stolz und Vorurteil", "author": "Jane Austen", "year": 1813},
    {"isbn": "978-3-456-78902-3", "title": "Krieg und Frieden", "author": "Leo Tolstoy", "year": 1869}
];

let lends = [];

app.use(express.json());

app.get('/lends', (request, response) => {
    response.json(lends);
});

app.get('/lends/:id', (request, response) => {
    const lend = lends.find(lend => lend.id === parseInt(request.params.id));
    if (!lend) return response.status(404).send('Lend not found.');
    response.json(lend);
});

app.post('/lends', (request, response) => {
    const { customer_id, isbn } = request.body;

    if (!customer_id || !isbn) {
        return response.status(422).send('Customer ID and ISBN are required.');
    }

    const existingLend = lends.find(lend => lend.isbn === isbn && !lend.returned_at);
    if (existingLend) {
        return response.status(409).send('Book is already lent out.');
    }

    const customerLends = lends.filter(lend => lend.customer_id === customer_id && !lend.returned_at);
    if (customerLends.length >= 3) {
        return response.status(422).send('Customer has reached the maximum number of lends.');
    }

    const newLend = {
        id: lends.length + 1,
        customer_id,
        isbn,
        borrowed_at: new Date(),
        returned_at: null
    };
    lends.push(newLend);
    response.status(201).json(newLend);
});

app.delete('/lends/:id', (request, response) => {
    const lendIndex = lends.findIndex(lend => lend.id === parseInt(request.params.id));
    if (lendIndex === -1) return response.status(404).send('Lend not found.');
    lends[lendIndex].returned_at = new Date();
    response.json(lends[lendIndex]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});