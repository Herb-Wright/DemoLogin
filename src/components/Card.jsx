import React from 'react';
import styled from 'styled-components';


const CardWrapper = styled.div`
color: white;
background: rgba(126, 0, 205, 0.5);
/* border: 0.5px solid rgba(255, 255, 255, 0.3); */
border: none;
box-sizing: border-box;
font-size: 1.25rem;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(40px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 20px;
padding: 30px;
height: 500px;
width: 500px;
/* Note: backdrop-filter has minimal browser support */
border-radius: 20px;
`

const Title = styled.h1`
font-family: sans-serif;
font-style: normal;
font-weight: 700;
font-size: 2.5rem;
margin-bottom: 45px;
line-height: 29px;
`


export default function Card({children, ...props}) {
  
  return (
    <CardWrapper>
        <Title>{props.title}</Title>
        {children}
    </CardWrapper>
  )
}
