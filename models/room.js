const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    roomNumber : {type : String, require : true , unique : true},
    name : {type : String, require : true},
    type  : {type : String , enum : ['Single','Double','Deluxe'], require : true},
    pricePerNight : {type : Number , require : true},
    isAvailable : {type : Boolean, default : true},
    description : {type : String},
    images : [],
    capacity : {type : Number, require  : true },
    services : {type : Array, require : true},

})


const roomModel = mongoose.model('Room',roomSchema)

module.exports = roomModel;
