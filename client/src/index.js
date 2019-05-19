import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'
import { store } from './store.js'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
        primary: deepOrange,
        secondary: {
            main: '#ffa000',
            light: '#ffe57f',
            dark: '#ffab00'
        }
    }
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <Provider store={store} >
        <App />
    </Provider>
    </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
