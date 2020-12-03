import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';
import './18next';
import AppContainer from '@containers/AppContainer';

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#6E7375'
    },
    primary: {
      main: '#254A93'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F7FAFF'
        }
      }
    }
  }
});

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={outerTheme}>
      <Router>
        <AppContainer />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
