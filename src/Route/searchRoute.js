import React, { useState, useEffect } from 'react';
import QuestionItem from '../Components/Dashboard/questionItem';
import Filter from '../Components/Dashboard/filter';
import QuestionButton from '../Components/questionButton';
import MainNav from '../Components/Nav/mainNav';
import SortButton from '../Components/Dashboard/sortButtons'
import { useLazyQuery } from 'react-apollo';
import { SEARCH } from '../graphQL/queries'



const Search = (props) => {
    const [sortBy, setSortBy] = useState(0);
    const [searchData, { loading, data }] = useLazyQuery(SEARCH)

    useEffect(() => {
        searchData({ variables: { searchKey: decodeURI(props.match.params.searchKey) } })
    }, [sortBy, searchData, data, loading, props]);

    return (
        <div>
            <MainNav {...props} />
            <div className="dashboard-container">
                <div className="dashboard-top">
                    <SortButton setSort={setSortBy} />
                    {data &&
                    <>
                        <h1>Results found: {data.search.length}</h1>
                        <QuestionItem
                            {...props}
                            sortByKey={sortBy}
                            data={{questions: data.search}}
                            loading={""} />
                    </>
                    }
                </div>
                <div className="dashboard-side">
                    <QuestionButton />
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default Search;