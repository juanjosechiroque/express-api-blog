const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String },
  content: { type: String },
  published: { type: Boolean, default: false },
});

module.exports = mongoose.model('Post', postSchema, 'posts');
