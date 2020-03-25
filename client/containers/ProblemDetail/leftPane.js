import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Pane from '../../components/Pane';

const LeftPainUI = styled.div`
  flex-grow: 1;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 720px) {
    border-bottom-style: solid;
    border-right-style: none;
  }
  border-right-style: solid;
  border-bottom-style: none;
  border-color: ${props => props.theme.colors.borderColor};
  border-width: 0.2px;
`;

const LeftPane = ({ description, title }) => (
  <Pane>
    <LeftPainUI>
      <h1>{title}</h1>
      <p>{description}</p>
    </LeftPainUI>
  </Pane>
);

LeftPane.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default LeftPane;
