/* eslint-disable no-underscore-dangle */
import useTrackUserProblems from './useTrackUserProblems';
import useGetRawProblem from './useGetRawProblem';
import { TRACKED_PROBLEMS } from '../util/contants';

const useGetTrackedProblem = key => {
  const [trackedFile, setTrackedFile] = useTrackUserProblems();
  let problemToSave = useGetRawProblem(key);
  let problemToFind;

  if (!trackedFile[key]) {
    problemToSave.expects.forEach(expect => {
      problemToSave = { ...problemToSave, ...{ [expect._id]: expect } };
    });
    problemToFind = problemToSave;
    try {
      window.localStorage.setItem(TRACKED_PROBLEMS,
        JSON.stringify({ ...trackedFile, ...{ [key]: problemToSave } }));
    } catch (error) {
      console.log(error);
    }
  } else {
    problemToFind = trackedFile[key];
  }

  const saveProblem = question => {
    trackedFile[key] = question;
    setTrackedFile(trackedFile);
  };

  return [problemToFind, saveProblem];
};

export default useGetTrackedProblem;
