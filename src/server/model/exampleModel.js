const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
  string: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('collectionName', exampleSchema);
