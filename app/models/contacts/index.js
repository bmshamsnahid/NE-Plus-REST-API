var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var contactsSchema = new Schema({
    personName: {
        type: String,
        required: true
    }, personNumber: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', contactsSchema);