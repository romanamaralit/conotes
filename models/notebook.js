const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notebookSchema = new Schema({
  name: { type: String, required: true },
  clients: [clientSchema],
},
{
  timestamps: true,
});

const clientSchema = new Schema({
  date: {type: Date},
  notes: { type: String, required: true },
  session: { type: String, required: true },

}, {
  timestamps: true
});


module.exports = mongoose.model('Notebook', notebookSchema);
