import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing/Routing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey, yellow } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const outerTheme = createMuiTheme({
  palette: {
    secondary: blueGrey,
    primary: yellow
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
