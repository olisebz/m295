const express = require('express');
const swaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const swaggerGenerator = swaggerAutogen();

const app = express();
const port = 3000;

app.use(express.json());
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let homeworks = [
  {id: 1, name: "Einkaufen", done: false},
  {id: 2, name: "Putzen", done: true},
  {id: 3, name: "Lernen", done: false}
];

function isValidHomework(homework) {
  return homework.name != "" && typeof homework.done == "boolean";
}

function getNextId() {
  return homeworks.reduce((max, homeworks) => Math.max(homeworks.id, max), 0) + 1;
}

app.get('/homeworks', (request, response) => {
  response.send(homeworks);
});

app.post('/homeworks', (request, response) => {
  const newHomework = request.body
	if (isValidHomework(newHomework)) {
    newHomework.id = getNextId();
		homeworks.push(newHomework);
		response.json(newHomework);
	} else {
		response.sendStatus(422);
	}
});

app.get('/homeworks/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const index = homeworks.findIndex((homework) => homework.id === id);
  if (index < 0) {
		return response.sendStatus(404);
	}
  response.json(homeworks[index]);
});

app.put("/homeworks/:id", (request, response) => {
	const id = parseInt(request.params.id);
	const index = homeworks.findIndex((homework) => homework.id === id);
	const updatedHomework = request.body;
	if (index < 0) {
		return response.sendStatus(404);
	} else if (isValidHomework(updatedHomework)) {
    updatedHomework.id = id;
		homeworks[index] = updatedHomework;
	  response.status(200).json(updatedHomework);
	} else {
    return response.sendStatus(422);
  }
});

app.delete('/homeworks/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const index = homeworks.findIndex((homework) => homework.id === id);
  if (index < 0) {
		return response.sendStatus(404);
	}
  const deletedHomework = homeworks[index];
  homeworks.splice(index, 1);
  response.json(deletedHomework);
});

app.listen(port, () => {
  console.log(`homeworks app listening on port ${port}`);
});

const doc = {
  info: {
    title: 'Homeworks API',
    description: 'My Homework API'
  },
  host: 'localhost:3000'
};
const outputFile = './swagger-output.json';
const routes = ['./homework.js'];
swaggerGenerator(outputFile, routes, doc);