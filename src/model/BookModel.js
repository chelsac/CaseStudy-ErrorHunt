const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0.ejygs4h.mongodb.net/?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false); //Part #2 Point 9  adding proper method

const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;