const mongoose = require('mongoose');
let dbschema = mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    password:String,
    city:String,
    aadhar:String
});
module.exports = mongoose.model('user',dbschema);
