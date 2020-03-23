import useLocalStorage from './useLocalStorage';
import { TRACKED_PROBLEMS } from '../util/contants';

// persist any change in file to local storage
const useTrackUserProblems = () => {
  const [savedFile, setSavedFile] = useLocalStorage(TRACKED_PROBLEMS, {});
  return [savedFile, setSavedFile];
};

export default useTrackUserProblems;
