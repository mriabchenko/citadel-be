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

// socket
// const Thruway = require("thruway.js");
// const wamp = new Thruway.Client('wss://demo.crossbar.io/ws', 'realm1');
// wamp.publish('com.myapp.counter', '34');