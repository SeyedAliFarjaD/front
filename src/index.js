import "./Assets/style.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PageWelcome from './Pages/Intro/PageWelcome';
import PageSignInOrUP from './Pages/Intro/PageSignInOrUP';
import PageSignIn from './Pages/Intro/PageSignIn';
import DrawerMenu from './DrawerMenu';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme, css } from '@mui/material/styles';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "light"
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter><App /></BrowserRouter>

        <ToastContainer
          style={{
            overflow: "visible",
            width: '428px',
            maxWidth: '100%',
          }}

          toastStyle={{
            overflow: "visible",
          }}
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
