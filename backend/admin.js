const mongoose = require('mongoose');
let dbschema = mongoose.Schema({
    adminname:String,
    password:String
});
module.exports = mongoose.model('admin',dbschema);
