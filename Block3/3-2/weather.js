const express = require('express'); // Importing the express module
const request = require('request'); // Importing the request module
const app = express(); // Creating an Express application
const port = 3000; // Setting the port number for the server to listen on

// Route for the root URL
app.get('/', (request, response) => {
    response.send('Write the zip into the url bar "localhost:300/temperature/{your zip}"');
});

// Route for getting temperature based on zip code
app.get('/temperature/:plz', (req, res) => {
    const plz = req.params.plz; // Extracting the zip code from the request parameters
    const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`; // Constructing the URL for Meteoswiss API using the zip code

    // Making a GET request to the Meteoswiss API
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, response, data) => {
        if (err) {
            console.log('Error:', err); // Logging an error if request encounters an error
            res.status(500).send('Internal Server Error'); // Sending a 500 Internal Server Error response
        } else if (response.statusCode !== 200) {
            console.log('Status:', response.statusCode); // Logging the status code if it's not 200
            res.status(response.statusCode).send('Error (elseif)'); // Sending the status code as response
        } else {
            const temp = data.currentWeather.temperature; // Extracting the current temperature from the response data
            console.log("confirmed") // Logging confirmation of successful response
            res.send(`in your city you have ${temp} degrece`); // Sending the temperature as response
        }
    });
});

// Start listening on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
