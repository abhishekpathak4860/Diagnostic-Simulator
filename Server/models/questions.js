const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true }, 
  
  options: [
    {
      text: { type: String, required: true },
      nextQuestionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question", default: null },
    },
  ],

  solution: { type: String, required: true },
});

module.exports = mongoose.model("Question", QuestionSchema);
