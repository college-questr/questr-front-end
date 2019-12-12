import React, { useState, useEffect, useReducer } from 'react';
import QuestionItem from './questionItem';
import Filter from './filter';
import QuestionButton from '../questionButton';
import MainNav from '../Nav/mainNav';
import SortButton from './sortButtons'
import {
  fetchMoreQuestion
} from '../../graphQL/queries';
import { useQuery } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { SearchContext } from '../../context/searchContext'
import {SearchReducer} from '../../context/searchReducer'


const Dashboard = (props) => {
  const [search, dispatch] = useReducer(SearchReducer,{questions:{data:{search:""},error:""},key:""})
  const [sortBy, setSortBy] = useState(0)
  const questions = useQuery(fetchMoreQuestion)

  useEffect(() => {

  }, [questions, sortBy, search]);


  const loadMore = () => {
    console.log(props)
    if (!questions.loading) {
      questions.fetchMore({
        // note this is a different query than the one used in the
        // Query component
        query: fetchMoreQuestion,
        variables: { lastId: questions.data.questions[questions.data.questions.length - 1].id },
        fetchPolicy: "network-only",
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousEntry = previousResult.questions;
          const newQuestions = fetchMoreResult.questions;

          if (!fetchMoreResult) return previousResult;
          return {
            questions: [...previousEntry, ...newQuestions],
            __typename: previousEntry.__typename
          }
        }
      })
    }

  }

  return (
    <SearchContext.Provider value={{search, dispatch}}>
      <div>
        <MainNav {...props} />
        <div className="dashboard-container">
          <div className="dashboard-top">
            <SortButton setSort={setSortBy} />
            {!questions.loading &&
              <QuestionItem
                {...props}
                sortByKey={sortBy}
                data={ search.key === ""  ? questions.data : {questions:search.questions.data.search}}
                onLoad={loadMore}
                loading={questions.loading} />
            }
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMore}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>Loading ...</div>
              }
            >
            </InfiniteScroll>
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

export default Dashboard;