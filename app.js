require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const socket = require('src/controllers/socket');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// rest api routes
app.use('/users', require('./src/controllers/users.conroller'));
app.use('/games', require('./src/controllers/games.conroller'));

// global error handler
app.use(errorHandler);

// Start http server
const httpPort = 3000;
app.listen(httpPort, function () {
    console.log(`Http server started on port ${httpPort}...`);
});

// Enable socket server
socket.start(app);
