/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Pane from '../../components/Pane';
import ExpectEvaluator from './expectEvaluator';

const RightPaneUI = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
  > * + * {
    border-top: solid;
    border-color: ${props => props.theme.colors.borderColor};
    border-width: 1px;
  }
`;

const RightPane = ({ expects, savedState }) => (
  <Pane>
    <RightPaneUI>
      {expects.map(item => {
        const savedExpect = savedState[item._id];
        return (
          <ExpectEvaluator
            key={item._id}
            _id={item._id}
            statement={savedExpect.statement}
            solution={savedExpect.solution}
            done={savedExpect.done}
            solutionDescription={savedExpect.solutionDescription}
          />
        );
      })}
    </RightPaneUI>
  </Pane>
);

RightPane.propTypes = {
  expects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  savedState: PropTypes.shape({}).isRequired,
};

export default RightPane;
