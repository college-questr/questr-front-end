import React, { useState, useEffect, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useQuery } from 'react-apollo';
import { SEARCH } from '../graphQL/queries'
import { SearchContext } from '../context/searchContext'

const Search = (props) => {

    let context = useContext(SearchContext);
    const [searchKey, setSearchKey] = useState("")
    const searchData = useQuery(SEARCH, { variables: { searchKey: "" } })

    const changeHandler = e => {
        setSearchKey(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        searchData.fetchMore({
            query: SEARCH,
            variables: {
                searchKey: searchKey
            },
            fetchPolicy: "network-only",
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const newQuestions = fetchMoreResult;
                return {...newQuestions, __typename: newQuestions.__typename }
            }
        })
    }

    useEffect(() => {
        if (context) {
            context.dispatch({ type: "NEW_SEARCH", payload: searchData, key: searchKey });

        }

    }, [searchKey, searchData])

    return (

        <
        div className = "search-container" >
        <
        form onSubmit = { submitHandler } >
        <
        label htmlFor = "search" > < /label> <
        SearchIcon className = "search" > Search < /SearchIcon> <
        input type = "text"
        placeholder = "Search Questr"
        name = "search"
        onChange = { changeHandler }
        /> < /
        form > <
        /div>

    )
}

export default Search