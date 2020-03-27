/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  light: {
    colors: {
      primary: '#0070f3',
      borderColor: '#EEEEEE',
      accent: '#E8FF63',
      backgroundColorDetail: 'F5F5F5',
    },
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Notable', sans-serif;
    margin: 0;
    line-height: 1.4rem;
    letter-spacing: 0.05rem;
  }
`;

export default class TestingTutor extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}
