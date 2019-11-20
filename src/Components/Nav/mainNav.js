import React from 'react';
import Style from 'styled-components';
import { labelColor, mainFont } from '../Styles/variables';
import { NavLink, Link } from 'react-router-dom';
import Search from '../search';

const MainNav = (props) => {


  return (
    <NavContainer>
      <LeftSection>
        <Logo>Questr</Logo>
      </LeftSection>
      <Search />
      <RightSection>
        <NavEl>Recent Questions</NavEl>
        <NavEl>Classroom</NavEl>

        <NavEl className="dropdown">
          <Button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </Button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="#">Profile</Link>
            <Link className="dropdown-item" to="#">Settings</Link>
            <Link className="dropdown-item" to="#">Logout</Link>
          </div>
        </NavEl>


      </RightSection>
    </NavContainer>
  )
}

export default MainNav;

const NavContainer = Style.nav`
    width:100%;
    display:flex;
    flex-flow: row nowrap;
    background-color: #90b1e2;
    justify-content:space-between;
    box-shadow: 0 4px 6px 0 hsla(0,0%,0%,20.0%);
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
  color: #fff;
`

const NavEl = Style.div`
    margin: 25px 0 25px 0;
    font-family: ${mainFont};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    transition:500ms
    padding-bottom:5px

    &:hover{
        cursor: pointer;
        border-bottom:3px solid ${labelColor};
    }
`

const Button = Style.button`
  background-color: #90b1e2;
  border: none;
  color: white;

  &:focus{
    outline: none;
  }
`
