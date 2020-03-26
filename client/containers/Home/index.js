import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Pane from '../../components/Pane';
import TestingIcon from '../../assets/testing.svg';

const TopComponentRoot = styled.article`
  width: 100vw;
  position: relative;
  height: 65vh;
  margin: -8px;
  overflow-x: hidden;
`;

const TiltedColoredComponent = styled.div`
  position: absolute;
  width: 140%;
  height: 100%;
  margin-top: -5%;
  margin-left: -5%;
  transform: rotate(2deg);
  background-color: black;

  @media (max-width: 720px) {
  }
`;

const PaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  top: 0px;
  padding-top: 3%;
  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

const TextContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LeftPane = () => (
  <Pane>
    <TextContainerTop>
      <h1>Welcome to Testing Tutor</h1>
      <p>Learn to write unit tests</p>
    </TextContainerTop>
  </Pane>
);

const RightPaneContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightPane = () => (
  <Pane>
    <RightPaneContainer>
      <TestingIcon style={{ width: '90%', height: '40vh' }} />
    </RightPaneContainer>
  </Pane>
);

const ContentContainer = () => (
  <PaneContainer>
    <LeftPane />
    <RightPane />
  </PaneContainer>
);

const TopComponent = () => (
  <TopComponentRoot>
    <TiltedColoredComponent />
  </TopComponentRoot>
);

const Page = styled.div`
  height: 100vh;
  position: relative;
  color: white;

`;

const GoToProblemsRoot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6%;
  padding-bottom: 6%;
`;

const GoToProblemsButton = styled.a`
  background-color: black;
  padding: 3%;
  padding-left: 6%;
  padding-right: 6%;
  color: ${props => props.theme.colors.accent};
  font-size: 1.5rem;
  border-radius: 1em;
  cursor: pointer;
`;

const GoToProblems = () => (
  <GoToProblemsRoot role="presentation">
    <Link href="/problems">
      <GoToProblemsButton>
        Go to Problems
      </GoToProblemsButton>
    </Link>
  </GoToProblemsRoot>
);

const Home = () => (
  <Page>
    <TopComponent />
    <ContentContainer />
    <GoToProblems />
  </Page>
);

export default Home;
