import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing/Routing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, yellow } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const outerTheme = createMuiTheme({
  palette: {
    secondary: yellow,
    primary: blueGrey
  }
});

ReactDOM.render(
  <ThemeProvider theme={outerTheme}>
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
