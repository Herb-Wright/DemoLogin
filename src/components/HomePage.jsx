import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import ToggleSwitch from './ToggleSwitch';
import { ThemeContext } from '../App.js';

const Container = styled.div`
/* color: white;
background: ${props => props.backgroundTheme === "light" ? "linear-gradient(200.42deg, #e6c8f1 13.57%, #bf85e2 98.35%)" : "linear-gradient(200.42deg, #121 13.57%, #4c176d 98.35%)" }; */
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`

const Button = styled.button`
background: linear-gradient(91.4deg, #7b4bb6 0%, #731fa7 100%);
box-shadow: 0px 10px 20px rgba(69, 110, 106, 0.3);
/* border: 0.5px outset rgba(255, 255, 255, 0.3); */
border: none;
border-radius: 30px;
/* Note: backdrop-filter has minimal browser support */
padding: 0px 1rem;
font-style: normal;
font-size: 1rem;
line-height: 130%;
color: white;
height: 2rem;
&:hover {
    background: linear-gradient(91.4deg, #734ba4 0%, #8737ba 100%);
    cursor: pointer;
}
margin: 0px 1rem;
`

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
max-width: 2000px;
`

const Heading = styled.h1`
font-size: 5rem;
`

const Avatar = styled.img`
width: 2rem;
height: 2rem;
border-radius: 1rem;
margin: 0px 1rem;
`

function HomePage() {
    
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate("/login");
        }
    }, [navigate]);

    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }

    return (
        <Container>
            <Navbar title="Dashboard">
                <ToggleSwitch onToggle={(isOn) => {theme.setTheme(isOn ? "light" : "dark")}} defaultValue={theme.theme === "dark"}>Theme</ToggleSwitch>
                <Button onClick={logOut}>Log Out</Button>
                <Avatar src="../../bobross.jpg" alt="" />
            </Navbar>
            <Content>
                <Heading>Welcome 💀💀💀</Heading>
            </Content>
        </Container>
    );
}

export default HomePage;