import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {

    const [search, setSearch] = useState({})

    const changeHandler = e => {
        setSearch({ ...search, [e.target.name]: e.target.value });
        console.log(search);
    }

    return (
        <div className="search-container">
            <form>
                <label htmlFor="search"></label>
                <SearchIcon className="search">Search</SearchIcon>
                <input
                    type="text"
                    placeholder="Search Questr"
                    name="search"
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export default Search

