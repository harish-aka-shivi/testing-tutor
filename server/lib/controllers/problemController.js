import problems from '../data/problems.json';

const getAllProblems = async (req, res) => {
  try {
    res.status(200).send(problems);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export {
  getAllProblems,
};
