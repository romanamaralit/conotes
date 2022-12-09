const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    name: {type:String}
}, {
    timestamps: true
})


const notebookSchema = new Schema({
    sessions: [sessionSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Notebook', notebookSchema);