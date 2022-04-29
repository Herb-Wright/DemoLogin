import React, { useState, useEffect } from 'react';
import {  useFormik } from 'formik';
import tryLogin from './tryLogin.js';
import styled from 'styled-components';
import Card from './Card';
import { useNavigate } from 'react-router-dom';


const ErrorParagraph = styled.p`
color: #ff6e82;
`

const Button = styled.button`
background: linear-gradient(91.4deg, #924bb6 0%, #670c9f 100%);
box-shadow: 0px 10px 20px rgba(69, 110, 106, 0.3);
border: none;
border-radius: 30px;
/* Note: backdrop-filter has minimal browser support */
width: 100%;
font-style: normal;
font-size: 1.8rem;
line-height: 130%;
color: white;
margin: 1.5rem 0rem 1rem 0rem;
height: 55px;
&:hover {
    background: linear-gradient(91.4deg, #734ba4 0%, #8737ba 100%);
    cursor: pointer;
}
`

const Container = styled.div`
/* color: white;
background: linear-gradient(200.42deg, #121 13.57%, #4c176d 98.35%); */
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
color: white;
padding: 6px 15px;
margin: 0.5rem 0rem;
background: linear-gradient(180deg, rgba(99, 106, 150, 0.4) 0%, rgba(182, 186, 214, 0.25) 100%);
border: 0.5px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
font-size: 1.25rem;
border: none;
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
backdrop-filter: blur(40px);

/* Note: backdrop-filter has minimal browser support */

border-radius: 30px;
width: 100%;
height: 55px;

`

function LoginFormFormik() {
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();    
    const formik = useFormik({
        initialValues: {
            username: 'TestL51peDJR',
            password: 'Test1234!',
        },
        validate: (values) => {
            const errors = {};
            if(values.password && values.password.length < 8) {
                errors.password = "The password must be at least 8 characters long";
            }
            return errors;
        },
        onSubmit: (values, {resetForm}) => {
            resetForm({});
            tryLogin(values.username, values.password)
            .then(token => {
                // alert(JSON.stringify(token));
                if(token.access_token) {
                    navigate("/");
                    localStorage.setItem('token', JSON.stringify(token));
                }
                else {
                    setLoginError("That is an incorrect login");
                }
            });
        }
    });

    return(
        <Container>
            <Card title="Login" >
                <form className='' onSubmit={formik.handleSubmit}>
                    <p> Username: </p>
                    <Input type="username" name="username" value={formik.values.username} onChange={formik.handleChange} />
                    <p> Password: </p>
                    <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />

                    <Button type="submit">Log In</Button>
                    {formik.errors.password ? <ErrorParagraph>{formik.errors.password}</ErrorParagraph> : null}
                    {(loginError === "") || <ErrorParagraph>{loginError}</ErrorParagraph>}
                </form>
            </Card>
        </Container>
    );
}

export default LoginFormFormik;