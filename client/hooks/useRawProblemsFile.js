/* eslint-disable no-underscore-dangle */
import { RAW_PROBLEM_KEY } from '../util/contants';
import useLocalStorage from './useLocalStorage';

const useRawProblemsFile = () => {
  const [rawFile] = useLocalStorage(RAW_PROBLEM_KEY, [{ problems: [] }]);

  const getRawProblemById = id => {
    const { problems } = rawFile;
    return (problems.filter(problem => problem._id === id))[0];
  };

  return {
    rawFile,
    getRawProblemById,
  };
};

export default useRawProblemsFile;
