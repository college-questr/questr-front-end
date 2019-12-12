import React, { useState, useEffect, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {

    const [searchKey, setSearchKey] = useState("")
    

    const changeHandler = e => {
        setSearchKey(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search=${encodeURI(searchKey)}`)
        e.stopPropagation();

        if(searchKey === ""){
            props.history.push("/dashboard")
                    e.stopPropagation();

        }
    }
    useEffect(() => {
 

    }, [searchKey])

    return (

        <div className="search-container" >
            <form onSubmit={submitHandler} >
                <label htmlFor="search" > </label>
                <SearchIcon className="search"> Search </SearchIcon>
                <input type="text"
                    placeholder="Search Questr"
                    name="search"
                    onChange={changeHandler}
                />
            </form >
        </div>

    )
}

export default Search