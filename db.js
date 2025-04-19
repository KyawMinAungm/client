const mongoose = require("mongoose");

var mongoUrl = 'mongodb+srv://kyaw:1212@cluster0.gusydat.mongodb.net/mern-hotel-lux';

mongoose.connect(mongoUrl, {useUnifiedTopology : true , useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error' , () => console.log('MongoDb connection failed'))
connection.on('connected' , () => console.log('MongoDb connection connected'))


module.exports = mongoose