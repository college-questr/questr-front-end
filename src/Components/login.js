import React, { useState, useEffect } from 'react';
import { buttonColor, bgColor, borderColor, labelColor, mainFont, loginButtonText } from './Styles/variables'
import Style from 'styled-components';

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email:"", password:""})

    const onChangeHandler = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = (e) => {
        //some api call

        e.preventDefault();
        console.log("submitted")
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={submitHandler}>

                <InputContainer>
                <LoginLabel htmlFor="email"> Email </LoginLabel>
                <LoginInput 
                    type='text' 
                    name='email' 
                    placeholder="example@gmail.com"
                    onChange={onChangeHandler}/>
                </InputContainer>

                <InputContainer>
                <LoginLabel htmlFor="password"> Password </LoginLabel>
                <LoginInput 
                    type='password' 
                    name='password' 
                    placeholder="password"
                    onChange={onChangeHandler} />
                </InputContainer>

                <SubmitButton type='submit'>Login</SubmitButton>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login;


const LoginContainer = Style.div`
    margin-top: 40px;
    width: 486px;
    height: 326px;
    background: ${bgColor};
    border: 1px solid ${borderColor};
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
    background: ${bgColor};
    border: 1px solid ${labelColor};
    border-radius: 5px;
    width: 395px;
    height: 47px;
`
const LoginLabel = Style.label`
    font-family: ${mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 21px;
    margin: 10px 0px;
    color: ${labelColor};
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
    font-family: ${mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${loginButtonText};
    transition: 1s;

    &:hover{
        cursor:pointer;
        border: 2px solid #4169E1;
    }
`

