import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from 'core/App';
import client from 'core/apolloClient';
import theme from 'styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
