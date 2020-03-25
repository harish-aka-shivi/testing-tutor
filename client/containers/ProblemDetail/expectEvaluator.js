import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReduxContext from './reduxContext';
import { MARK_EXPECT_SOLVED, RESET_EXPECT } from './constants';

const Root = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Description = styled.label`
  width: 100%;
`;


const TextArea = styled.input`
  width: 100%;
`;

const DoneButton = styled.button`

`;

const ResetButton = styled.button`

`;

const ExpectEvaluator = ({
  statement, _id, solution, solutionDescription, done,
}) => {
  const { dispatch } = useContext(ReduxContext);

  const [inputValue, setInputValue] = useState(() => (done ? solution : ''));

  const checkSolution = (providedSolution, expectedSolution) => (providedSolution.trim().split('').join('') === expectedSolution.trim().split('').join(''));

  const markExpectDone = id => {
    dispatch({ type: MARK_EXPECT_SOLVED, payload: { id } });
  };

  const resetState = id => {
    dispatch({ type: RESET_EXPECT, payload: { id } });
  };

  const onDoneClick = event => {
    event.preventDefault();
    const isRight = checkSolution(inputValue, solution);
    console.log(isRight, inputValue, solution);
    if (isRight) {
      markExpectDone(_id);
    }
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const onResetClicked = event => {
    event.preventDefault();
    resetState(_id);
  };

  return (
    <Root>
      <Description>
        {statement}
        <TextArea type="text" value={inputValue} onChange={handleChange} />
      </Description>
      {done && <p>{solutionDescription}</p>}
      <DoneButton onClick={onDoneClick}>Check</DoneButton>
      {done && <ResetButton onClick={onResetClicked}>Reset</ResetButton>}
    </Root>
  );
};

ExpectEvaluator.propTypes = {
  statement: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  solutionDescription: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default ExpectEvaluator;
