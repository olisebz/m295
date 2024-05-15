import express from 'express';
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

app.use(express.json());

app.get('/books', (request, response) => {
  response.send(books);
});

app.get('/books/:isbn', (request, response) => {
  const isbn =request.params.isbn
  response.send(books.find((book) => book.isbn === isbn));
});

app.post('/books',(request, response) => {
  books = [...books, request.body]
  response.send(request.body)
});

app.put('/books/:isbn',(request, response) => {
  books = books.map((book)=> book.isbn === request.params.isbn ? request.body :book);
  response.send(books)
});

app.delete('/books/:isbn',(request, response) => {
  books = books.filter((book)=> book.isbn !== request.params.isbn);
  response.send(books)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});