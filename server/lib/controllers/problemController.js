import Problem from '../models/problem';

const addProblem = async (req, res) => {
  const problem = new Problem({
    ...req.body,
  });
  try {
    await problem.save();
    res.status(200).send(problem);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Error in saving problem ${e}`);
  }
};

const getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find({});
    res.status(200).send({ problems });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


const getAProblem = async (req, res) => {
  const problemId = req.params.id;
  try {
    const problem = await Problem.findById(problemId);
    res.status(200).send({
      problem,
    });
  } catch (error) {
    console.log(error);
    res.send(500).send(error);
  }
};

export {
  addProblem,
  getAllProblems,
  getAProblem,
};
