const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  action: {
    type: String,
    required: true,
    enum: ["establish", "demolish", "in-progress"]
  }
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
