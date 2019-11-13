import React from 'react'
import Login from '../Components/login'
import LoginNav from '../Components/Nav/loginNav';
import Footer from '../Components/footer'

const LoginPage = (props) => {
    return (
        <>
            <div className='container'>
                <LoginNav page='login' />
                <Login />
            </div>
            <Footer />
        </>
    )
}

export default LoginPage;