import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PaneMain = styled.article`
  display: flex;
  flex-grow: 0.5;
  @media (max-width: 720px) {
    max-width: 100%;
    width: 100%;
  }
  max-width: 50%;
  width: 50%;
`;

const Pane = ({ children, style }) => (
  <PaneMain style={style}>
    {children}
  </PaneMain>
);

Pane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.shape({}),
};

Pane.defaultProps = {
  children: [],
  style: {},
};

export default Pane;
