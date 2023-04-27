const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    first_name: String,
    email:   String,
   
});


module.exports = mongoose.model('Student', studentSchema);