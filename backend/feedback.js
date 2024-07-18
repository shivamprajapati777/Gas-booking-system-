const mongoose=require('mongoose');
let dbschema=mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    feedback:String
});
module.exports =mongoose.model('feedback',dbschema);