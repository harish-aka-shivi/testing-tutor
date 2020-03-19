import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  description: String,
  expects: [{
    statement: String,
    solution: String,
    solutionDescription: String,
  }],
});

const Problem = mongoose.model('Problem', problemSchema);
export default Problem;
