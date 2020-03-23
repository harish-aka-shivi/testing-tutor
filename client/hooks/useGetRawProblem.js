/* eslint-disable no-underscore-dangle */
import useLocalStorage from './useLocalStorage';
import { RAW_PROBLEM_KEY } from '../util/contants';

const useGetRawProblem = id => {
  const [problems] = useLocalStorage(RAW_PROBLEM_KEY, []);
  return (problems.filter(problem => problem._id === id))[0];
};

export default useGetRawProblem;
