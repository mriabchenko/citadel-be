require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// rest api routes
app.use('/users', require('./src/controllers/users.conroller'));

// global error handler
app.use(errorHandler);

// Socket
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(80);
const socketApi = require('./src/api/socket');
socketApi(io);

// Start Server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});
