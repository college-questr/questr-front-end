import React, { useState, useEffect, useReducer } from 'react';
import QuestionItem from '../Components/Dashboard/questionItem';
import Filter from '../Components/Dashboard/filter';
import QuestionButton from '../Components/questionButton';
import MainNav from '../Components/Nav/mainNav';
import SortButton from '../Components/Dashboard/sortButtons'
import {
  fetchMoreQuestion
} from '../graphQL/queries';
import { useQuery } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { SearchContext } from '../context/searchContext'
import {SearchReducer} from '../context/searchReducer'


const Search = (props) => {
  const [search, dispatch] = useReducer(SearchReducer,{questions:{data:{search:""},error:""},key:""});
  const [sortBy, setSortBy] = useState(0);

  useEffect(() => {

  }, [ sortBy, search]);

  return (
    <SearchContext.Provider value={{search, dispatch}}>
      <div>
        <MainNav {...props}/>
        <div className="dashboard-container">
          <div className="dashboard-top">
            <SortButton setSort={setSortBy} />
            {/* {!questions.loading &&
              <QuestionItem
                {...props}
                sortByKey={sortBy}
                data={{ questions: search.questions.data.search }}
                onLoad={loadMore}
                loading={""} />
            } */}
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={loadMore}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>Loading ...</div>
              } */}
            >
            {/* </InfiniteScroll> */}
          </div>
          <div className="dashboard-side">
            <QuestionButton />
            <Filter />
          </div>
        </div>
      </div>
    </SearchContext.Provider>

  )
}

export default Search;