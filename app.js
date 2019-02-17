const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');

// DB connection
mongoose.connect(config.database, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log(`DB connection success`));

const app = express();
const port = 3000;

// Start Server
app.listen(port, function () {
    console.log(`Server started on port ${port}...`);
});

// Socket
const server = require('http').Server(app);
const io = require('socket.io')(server);


server.listen(80);

const socketApi = require('./src/api/socket');
socketApi(io);