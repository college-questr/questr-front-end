import React from 'react'
import Signup from '../Components/signup'
import LoginNav from '../Components/Nav/loginNav';

const SignupPage = (props) => {
  return (
    <div className='container'>
      <LoginNav page='signup'></LoginNav>
      <Signup />
    </div>
  )
}

export default SignupPage;