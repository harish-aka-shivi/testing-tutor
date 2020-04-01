/* eslint-disable no-underscore-dangle */
import useLocalStorage from './useLocalStorage';
import useRawProblemsFile from './useRawProblemsFile';
import { TRACKED_PROBLEMS } from '../util/contants';
import { getLocalStorage } from '../util/localStorage';

const useTrackProblemFile = () => {
  const [trackedFile, setTrackedFile] = useLocalStorage(TRACKED_PROBLEMS, {});
  const { getRawProblemById } = useRawProblemsFile();

  const localStorage = getLocalStorage();
  const getTrackedProblemById = id => {
    let originalProblem = getRawProblemById(id);
    let problemToFind;

    if (!trackedFile[id]) {
      originalProblem.expects.forEach(expect => {
        originalProblem = { ...originalProblem, ...{ [expect._id]: expect } };
      });
      problemToFind = originalProblem;
      try {
        localStorage.setItem(TRACKED_PROBLEMS,
          JSON.stringify({ ...trackedFile, ...{ [id]: originalProblem } }));
      } catch (error) {
        console.log(error);
      }
    } else {
      // check whether this problem version has changed.
      const originalFileProblemVersion = originalProblem.version ? originalProblem.version : 0;
      const trackedFileProblemVersion = trackedFile[id] ? trackedFile[id].version : 0;
      if (originalFileProblemVersion > trackedFileProblemVersion) {
        // reset the problem and save new data
        originalProblem.expects.forEach(expect => {
          originalProblem = { ...originalProblem, ...{ [expect._id]: expect } };
        });
        problemToFind = originalProblem;
        try {
          localStorage.setItem(TRACKED_PROBLEMS,
            JSON.stringify({ ...trackedFile, ...{ [id]: originalProblem } }));
        } catch (error) {
          console.log(error);
        }
      } else {
        problemToFind = trackedFile[id];
      }
    }
    return problemToFind;
  };

  // convert it into async
  const saveProblemById = (questionId, question) => {
    trackedFile[questionId] = question;
    setTrackedFile(trackedFile);
  };

  return [getTrackedProblemById, saveProblemById];
};

export default useTrackProblemFile;
