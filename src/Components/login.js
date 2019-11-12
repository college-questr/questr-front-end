import React, { useState, useEffect } from 'react';
import Style from 'styled-components';

const Login = (props) => {
    return (
        <LoginContainer>
            <LoginForm>

                <InputContainer>
                <LoginLabel htmlFor="email"> Email </LoginLabel>
                <LoginInput type='text' name='Email' placeholder="example@gmail.com"/>
                </InputContainer>

                <InputContainer>
                <LoginLabel htmlFor="password"> Password </LoginLabel>
                <LoginInput type='password' name='password' placeholder="password" />
                </InputContainer>

                <SubmitButton type='submit'>Login</SubmitButton>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login;


const buttonColor = "#93B2E0";

const LoginContainer = Style.div`
    margin-top: 20px;
    width: 486px;
    height: 326px;
    background: #FFFFFF;
    border: 1px solid #F7FAFC;
    border-radius: 15px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const LoginForm = Style.form`
    width: 395px;
    height: 233px;
    display:flex;
    justify-content:center;
    flex-flow: column nowrap;
`

const LoginInput = Style.input`
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.61);
    border-radius: 5px;
    width: 395px;
    height: 47px;
`
const LoginLabel = Style.label`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 21px;
    margin: 10px 0px;
    color: rgba(0, 0, 0, 0.64);
`

const InputContainer = Style.div`
    display:flex;
    justify-content:center;
    flex-flow: column nowrap;
`

const SubmitButton = Style.button`
    margin: 10px 0 0 0;
    width: 145.84px;
    height: 37px;
    background: ${buttonColor};
    border: 5px solid ${buttonColor};
    box-sizing: border-box;
    border-radius: .2rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    transition: 1s;

    &:hover{
        cursor:pointer;
        border: 2px solid #4169E1;

    }
`

