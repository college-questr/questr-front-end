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

const Dashboard = (props) => {
  const [sortBy, setSortBy] = useState(0)
  const questions = useQuery(fetchMoreQuestion)
  const [isThereMore, setIsThereMore] = useState(true);

  useEffect(() => {

  }, [questions, sortBy, isThereMore]);

console.log(isThereMore);
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
          if(newQuestions.length === 0) setIsThereMore(false)
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
      <div>
        <MainNav {...props} />
        <div className="dashboard-container">
          <div className="dashboard-top">
            <SortButton setSort={setSortBy} />
            {!questions.loading &&
            <div>
            <QuestionItem
              {...props}
              sortByKey={sortBy}
              data={questions.data}
              onLoad={loadMore}
              loading={questions.loading} />
              
            <button className={`add-more-questions ${!isThereMore ? 'hide' : ''}`} onClick={loadMore}>Load More</button>

            </div>
              
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

export default Dashboard;