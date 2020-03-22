import React from 'react';
import { useRouter } from 'next/router';

const Problem = () => {
  const router = useRouter();
  return (
    <>
      Next Js Problem Page
      {' '}
      {router.query.id}
    </>
  );
};

export default Problem;
