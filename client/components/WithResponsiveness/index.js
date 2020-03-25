/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const ResponsiveRoot = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

const ResponsiveElement = styled.div`
  width: 100%;
  max-width: 600px;
`;

const withResponsiveness = Element => props => (
  <ResponsiveRoot>
    <ResponsiveElement>
      <Element {...props} />
    </ResponsiveElement>
  </ResponsiveRoot>
);

export default withResponsiveness;
