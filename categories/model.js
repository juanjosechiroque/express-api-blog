const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: { type: String }
});

module.exports = mongoose.model('Category', categorySchema, 'categories');
