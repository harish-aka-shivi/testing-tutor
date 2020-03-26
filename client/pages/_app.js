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
    },
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Notable', sans-serif;
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
