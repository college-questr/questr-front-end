import React from 'react';
import Style from 'styled-components';
import { labelColor, mainFont } from '../Styles/variables';
import { NavLink } from 'react-router-dom';

const LoginNav = (props) => {


    return (
        <NavContainer>
            <LeftSection>
                <Logo>Questr</Logo>
            </LeftSection>
            <RightSection>
                <NavEl>Home</NavEl>
                <NavEl>About Us</NavEl>
                <NavEl>
                    <NavLink 
                        style={{ textDecoration: 'none', color: `${labelColor}` }}  
                        to={props.page === "signup" ? "/login" : "/signup"}>
                        {props.page === "signup" ? "Login" : "Sign Up"}
                    </NavLink>
                </NavEl>
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
`

const LeftSection = Style.div`
    margin:15px 30px;
    font-size:2rem;
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
