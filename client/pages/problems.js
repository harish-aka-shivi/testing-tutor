import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ProblemsContainer from '../containers/Problems';
import useSaveRawProblems from '../hooks/useSaveRawProblems';

const Problems = ({ problems }) => {
  useSaveRawProblems(problems);
  return (
    <main>
      <ProblemsContainer problems={problems.problems} />
    </main>
  );
};

Problems.propTypes = {
  problems: PropTypes.shape({
    problems: PropTypes.array,
    version: PropTypes.number,
  }).isRequired,
};

export async function getStaticProps() {
  let problems = [];
  try {
    const res = await fetch('https://testing-guru.herokuapp.com/problems');
    const respJson = await res.json();
    problems = respJson;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      problems,
    },
  };
}

export default Problems;
