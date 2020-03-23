/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useRouter } from 'next/router';
import ProblemDetail from '../../containers/problemDetail';
import useGetRawProblem from '../../hooks/useGetRawProblem';

const Problem = () => {
  const router = useRouter();
  const { id } = router.query;
  const problem = useGetRawProblem(id);
  if (!problem) {
    return (<p> Error loading data </p>);
  }
  return (
    <ProblemDetail problem={problem} />
  );
};


export default Problem;
