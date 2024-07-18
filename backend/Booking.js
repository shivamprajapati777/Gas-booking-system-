const mongoose = require('mongoose');
let dbschema = mongoose.Schema({
    name:String,
    contact:Number,
    bdate:String,
    price:String,
    type:String,
    address:String,
    city:String,
    email:String,
    status:String,
    
});
module.exports = mongoose.model ('booking',dbschema)

