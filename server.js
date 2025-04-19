const express = require('express')

const app = express();

const dbConfig = require('./db')

const roomsRoute = require('./routes/rooms-route')

app.use('/api/rooms', roomsRoute)

const port = process.env.port || 5000;

app.listen(port , () => console.log('Server running with nodemon ...'))