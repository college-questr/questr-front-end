import React, {useState,useEffect} from 'react';
import Style from 'styled-components';
import SearchIcon from '../Img/magnifyingGlass.png';
import {mainBgColor} from './Styles/variables'

const Search = (props) => {

const [search, setSearch] = useState({}) 

    const changeHandler = e => {
        setSearch({...search,[e.target.name]:e.target.value});
        console.log(search);
    }

    return(
    <SearchContainer>
        <SearchForm>
            <label htmlFor="search"></label>
            <SearchInput type="text" placeholder="Question" name="search" onChange={changeHandler} />
            <SearchButton type="submit">
                <img src={SearchIcon} />                    
            </SearchButton >
        </SearchForm>
    </SearchContainer>
    )
}

export default Search

const SearchContainer = Style.div`
    margin: 40px 10px;
`

const SearchForm = Style.form`
    display:flex;
    align-item: center;
    justify-content: space-between;
    min-width:400px;
    max-width:800px;
`
const SearchInput = Style.input`
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.12);
    border-radius: 14px;
    width: 873px;
    height: 55px;
`

const SearchButton = Style.button`
    background: #93B2E0;
    border: 1px solid #93B2E0;
    box-sizing: border-box;
    border-radius: 8px;
    margin-left:10px;
    transition:500ms;
    display:flex;
    justify-content:center;

    &:hover{
        border:3px solid ${mainBgColor};
        cursor:pointer;
    }
`