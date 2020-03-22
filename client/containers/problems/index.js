/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import withResponsiveness from '../../components/withResponsiveness';

const ListItemUi = styled.li`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

const SectionUi = styled.section`
  padding: 1em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-height: 100vh;
`;

const ListUi = styled.ol`
  > * + * {
    border-top: solid;
    border-color: ${props => props.theme.colors.borderColor};
    border-width: 1px;
  }
`;

const List = ({ children }) => (
  <ListUi>
    {children}
  </ListUi>
);

const ListItem = ({ title, id }) => (
  <ListItemUi>
    <Link href="/problem/[id]" as={`/problem/${id}`}>
      <a>{title}</a>
    </Link>
  </ListItemUi>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const ProblemsContainer = ({ problems }) => (
  <SectionUi>
    <List>
      {
      problems.map(problem => (
        <ListItem
          key={problem._id}
          title={problem.title || problem.description}
          id={problem._id}
        />
      ))
    }
    </List>
  </SectionUi>
);

ProblemsContainer.propTypes = {
  problems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withResponsiveness(ProblemsContainer);
