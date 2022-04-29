import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width: 2rem;
height: 2rem;
display: flex;
align-items: center;
justify-content: center;
`

const CheckBox = styled.button`
background: ${props => props.checked ? "black" : "white"};
height: 1.5rem;
width: 1.5rem;
border-radius: 1rem;
margin: 0px 1rem 0px 0.5rem;
/* padding: none; */
display: flex;
align-items: center;
justify-content: center;
`

function ToggleSwitch(props) {
    const [isChecked, setIsChecked] = useState(props.defaultValue);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        props.onToggle(isChecked);
    }

    return ( 
        <Container>
            {props.children}
            <CheckBox checked={isChecked} onClick={handleToggle}>{isChecked ? "🌙" : "🌤️" }</CheckBox>
        </Container>
    );
}

export default ToggleSwitch;