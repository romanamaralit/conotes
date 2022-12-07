const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./notebook');
const clientSchema = require('./clientSchema');

module.exports = mongoose.model('Client', clientSchema);
