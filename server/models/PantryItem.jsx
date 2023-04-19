// models/PantryItem.js
const mongoose = require('mongoose');

const PantryItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PantryItem', PantryItemSchema);
