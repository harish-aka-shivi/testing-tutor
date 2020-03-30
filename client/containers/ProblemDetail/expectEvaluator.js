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
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  > * + * {
    margin-top: 1em;
  }
`;

const Description = styled.label`
  width: 100%;
`;


const TextArea = styled.input`
  width: 100%;
  margin-top: 1em;
  background-color: darkslategray;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  color: white;
  border: none;
  border-radius: 10px;
  padding-top: 0.8em;
  padding-bottom: 0.8em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 1em;
`;

const DoneButton = styled.button`
  background-color: green;
  color: white;
  padding: 1em;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const ResetButton = styled.button`
  background-color: blue;
  color: white;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
`;

const ExplainationContainer = styled.p`
  margin-bottom: 0;
`;

const SolutionStatusLabel = styled.p`
  margin-bottom: 0;
  color: ${props => (props.status === 'RIGHT' ? 'green' : 'red')}
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > * + * {
    margin-left: 1em;
  }`;

const ExpectEvaluator = ({
  statement, _id, solution, solutionDescription, done,
}) => {
  const { dispatch } = useContext(ReduxContext);

  const [inputValue, setInputValue] = useState(() => (done ? solution : ''));

  const [solutionStatus, setSolutionStatus] = useState(() => (done ? 'RIGHT' : ''));

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
    setSolutionStatus('WRONG');
    if (isRight) {
      setSolutionStatus('RIGHT');
      markExpectDone(_id);
    }
  };

  const handleChange = event => {
    setSolutionStatus('');
    setInputValue(event.target.value);
  };

  const onResetClicked = event => {
    event.preventDefault();
    setInputValue('');
    resetState(_id);
  };


  return (
    <li>
      <Root>
        <Description>
          {statement}
          <TextArea disabled={!!done} type="text" value={inputValue} onChange={handleChange} />
        </Description>
        {solutionStatus
          && <SolutionStatusLabel status={solutionStatus}>{solutionStatus === 'RIGHT' ? 'Correct Answer' : 'Incorrect'}</SolutionStatusLabel>}
        {done && (
        <ExplainationContainer>
          Explaination:
          {' '}
          {solutionDescription}
        </ExplainationContainer>
        )}
        <ButtonsContainer>
          <DoneButton disabled={!!done} onClick={onDoneClick}>Check</DoneButton>
          {done && <ResetButton onClick={onResetClicked}>Reset</ResetButton>}
        </ButtonsContainer>
      </Root>
    </li>
  );
};

ExpectEvaluator.defaultProps = {
  done: false,
};

ExpectEvaluator.propTypes = {
  statement: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  solutionDescription: PropTypes.string.isRequired,
  done: PropTypes.bool,
};

export default ExpectEvaluator;
