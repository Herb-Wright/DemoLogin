import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Nav = styled.nav`
background: rgba(126, 0, 205, 0.5);
color: white;
display: flex;
width: 100vw;
flex-direction: row;
align-items: center;
height: 3rem;
padding: 0px 1rem;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`

const Title = styled.h2`
text-align: left;
font-size: 2rem;
`

const ItemContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
padding-right: 1rem;
flex-grow: 1;

`


function Navbar(props) {
    return ( 
        <Nav>
            <Title>{props.title}</Title>
            <ItemContainer>
            {props.children}
            </ItemContainer>
        </Nav>
    );
}

export default Navbar;