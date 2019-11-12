import React from 'react';
import Style from 'styled-components';
import {labelColor, mainFont} from '../Styles/variables';

const LoginNav = (props) => {
    return(
        <NavContainer>
            <LeftSection> 
                <Logo>Questr</Logo>
            </LeftSection>
            <RightSection>
                <NavEl>Home</NavEl>
                <NavEl>About Us</NavEl>
                <NavEl>Sign Up</NavEl>
            </RightSection>
        </NavContainer>
    )
}

export default LoginNav;

const NavContainer = Style.nav`
    width:100%;
    display:flex;
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
`

const LeftSection = Style.div`
    margin-left:30px;
    font-size:2rem;
            padding-bottom:20px;

    
`

const RightSection = Style.div`
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    width:400px;
`

const Logo = Style.h1`

`

const NavEl = Style.a`
    margin: 25px 0 25px 0;
    font-family: ${mainFont};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color:${labelColor};
    transition:500ms

    &:hover{
        cursor: pointer;
        padding-bottom:5px;
        border-bottom:5px solid ${labelColor};
    }
`
