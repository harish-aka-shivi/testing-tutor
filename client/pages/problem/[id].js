/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicProblemDetail = dynamic(
  () => import('../../containers/ProblemDetail'),
  { ssr: false }
)

const Problem = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <DynamicProblemDetail id={id} />
  );
};


export default Problem;
