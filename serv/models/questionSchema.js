// import mongoose from "mongoose";
// const { Schema } = mongoose;

// /** question model */
// const questionModel = new Schema({
//     questions: { type : Array, default: []}, // create question with [] default value
//     answers : { type : Array, default: []},
//     createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model('Question', questionModel);
import mongoose from 'mongoose';

// Assuming you have a helper function to shuffle arrays
function shuffleArray(array) {
  // Implement the logic to shuffle the array
  // ...
}

const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  questions: { type: Array, default: [], set: shuffleQuestions },
  answers: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

function shuffleQuestions(questions) {
  return shuffleArray(questions);
}

export default mongoose.model('Question', questionModel);
