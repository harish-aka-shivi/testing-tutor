/* eslint-disable no-underscore-dangle */
import React, { useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useGetTrackedProblem from '../../hooks/useGetTrackedProblem';
import ReduxContext from './reduxContext';
import { INIT_STATE, MARK_EXPECT_SOLVED, RESET_EXPECT } from './constants';
import LeftPane from './leftPane';
import RightPane from './rightPane';

const PaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  max-width: 100%;
  min-height: 100vh;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const ProblemDetail = ({ problem }) => {
  const [savedState, setSavedState] = useGetTrackedProblem(problem._id);

  const reducer = (state = savedState, action) => {
    switch (action.type) {
      case INIT_STATE:
        return { ...action.payload };
      case MARK_EXPECT_SOLVED: {
        // save the data here.
        const toBeSavedQuestion = {
          ...state,
          [action.payload.id]: { ...state[action.payload.id], done: true },
        };
        setSavedState(toBeSavedQuestion);
        return { ...state, ...toBeSavedQuestion };
      }
      case RESET_EXPECT: {
        const toBeSavedQuestion = {
          ...state,
          [action.payload.id]: { ...state[action.payload.id], done: false },
        };
        setSavedState(toBeSavedQuestion);
        return { ...state, ...toBeSavedQuestion };
      }
      default:
        return state;
    }
  };

  const [, dispatch] = useReducer(reducer, savedState);

  return (
    <ReduxContext.Provider value={{ dispatch }}>
      <PaneContainer>
        <LeftPane key={1} description={savedState.description} title={savedState.title} />
        <RightPane key={2} expects={savedState.expects} savedState={savedState} />
      </PaneContainer>
    </ReduxContext.Provider>
  );
};

ProblemDetail.propTypes = {
  problem: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    expects: PropTypes.arrayOf(PropTypes.shape({})),
    _id: PropTypes.string,
  }).isRequired,
};

export default ProblemDetail;
