const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "hey type something bro"],
    trim: true,
    maxlength: [20, "name =20c bro"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Tasks", TaskSchema);
