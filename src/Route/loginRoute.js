import React from 'react'
import Login from '../Components/login'
import LoginNav from '../Components/Nav/loginNav';

const LoginPage = (props) => {
    return (
        <div className='container'>
            <LoginNav page='login' />
            <Login />
        </div>
    )
}

export default LoginPage;