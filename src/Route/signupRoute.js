import React from 'react'
import Signup from '../Components/signup'
import LoginNav from '../Components/Nav/loginNav';
import Footer from '../Components/footer';
const SignupPage = (props) => {
  return (
    <>
    <div className='container'>
      <LoginNav page='signup'></LoginNav>
      <Signup />
    </div>
    <Footer />
    </>
  )
}

export default SignupPage;