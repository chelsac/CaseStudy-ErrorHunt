const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0.ejygs4h.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false); //Part #2 Point 9  adding proper method


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;