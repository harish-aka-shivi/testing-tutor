/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  light: {
    colors: {
      primary: '#0070f3',
      borderColor: '#FAFAFA',
    },
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme.light}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
