const Schema = require('mongoose').Schema;

const clientSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  notebook: {type: Schema.Types.ObjectId, ref: 'Notebook'},
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = clientSchema;
