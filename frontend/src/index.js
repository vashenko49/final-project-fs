import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Routing from './components/Routing/Routing';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import './18next';
import Loader from './components/Loader/Loader';

const outerTheme = createMuiTheme({
  palette: {
    secondary: blueGrey,
    primary: {
      main: '#254A93'
    }
  }
});

ReactDOM.render(
  <Suspense fallback={<></>}>
    <ThemeProvider theme={outerTheme}>
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Routing />
          <Loader />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);
