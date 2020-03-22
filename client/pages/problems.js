import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import ProblemsContainer from '../containers/problems';

const Problems = ({ problems }) => (
  <main>
    <ProblemsContainer problems={problems} />
  </main>
);

Problems.propTypes = {
  problems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getStaticProps() {
  let problems = [];
  try {
    const res = await fetch('https://testing-guru.herokuapp.com/problems');
    const respJson = await res.json();
    problems = respJson.problems;
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
