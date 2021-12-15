import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import SignIn from './components/Auth/SignIn';
import { createGlobalStyle, ThemeProvider } from "styled-components"
import lightTheme from './light-theme';
import SignUp from './components/Auth/SignUp';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }

  #root {
    height: 100vh;
    width: 100vw;
  }
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="chat" element={<Chat />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
