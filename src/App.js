import './App.css';
import { createContext, useState } from 'react';
import LoginFormFormik from './components/LoginFormFormik'
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';


const Container = styled.div`
color:  ${props => props.backgroundTheme === "light" ? "#222" : "white"};
background: ${props => props.backgroundTheme === "light" ? "linear-gradient(200.42deg, #e6c8f1 13.57%, #bf85e2 98.35%)" : "linear-gradient(200.42deg, #121 13.57%, #4c176d 98.35%)" };
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  return (
      <BrowserRouter>
        <ThemeContext.Provider value={{
          setTheme,
          theme
        }}>
          <Container backgroundTheme={theme}>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/login" element={<LoginFormFormik/>}/>
            </Routes>
          </Container>
        </ThemeContext.Provider>
      </BrowserRouter>
  );
}

export default App;
