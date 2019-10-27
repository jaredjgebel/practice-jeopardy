const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  id: Number,
  title: String,
  created_at: String,
  updated_at: String,
  clues_count: Number
});

const clueSchema = new mongoose.Schema({
  id: Number,
  answer: String,
  question: String,
  value: Number,
  airdate: String,
  created_at: String,
  updated_at: String,
  category_id: Number,
  game_id: Number,
  invalid_count: Number,
  category: categorySchema
});

module.exports = mongoose.model("Clue", clueSchema);
