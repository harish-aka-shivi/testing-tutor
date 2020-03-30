import { useEffect } from 'react';
import { RAW_PROBLEM_KEY } from '../util/contants';

// special purpose hook which uses use effect which enables it to work in statically generated sites
const useSaveRawProblems = problemsFetched => {
  useEffect(() => {
    try {
      const serializedProblems = window.localStorage.getItem(RAW_PROBLEM_KEY);
      const problemsJson = serializedProblems ? JSON.parse(serializedProblems) : [];
      const savedVersion = problemsJson.version ? problemsJson.version : 0;
      if (parseInt(savedVersion, 10) < parseInt(problemsFetched.version, 10)) {
        window.localStorage.setItem(RAW_PROBLEM_KEY, JSON.stringify(problemsFetched));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return [];
};

export default useSaveRawProblems;
