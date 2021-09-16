// declare an Object to act as the app API endpoint
projectData = {};
// Express to run servers and routes
const express = require('express');
// Start Up an instance of an app
const app = express();
//initalize the main project folder
app.use(express.static('project'));
// Cors for cross original allowance
const cors = require('cors');
// setup the instance of the app to use cors package
app.use(cors());
// include body parser in the project
const bodyParser = require('body-parser');
//configuring the instance of the app to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
// GET route setup on the server side 
app.get('/getData', (req, res) => {
    res.send(projectData);
});
// add an entry to the project endpoint using a POST route setup on the server side
app.post('/',(req, res) => {
    projectData = {...req.body};
    console.log(projectData);
    res.send(projectData);
});
// declare a variable with port the server wil be running on
const port = 3000;
//instantiate a server with port number and a callback Function as arguments
const server = app.listen(port, listening);
// declare the callback function separately
function listening() {
    console.log(`The server is successfully running on the port ${port}`);
}