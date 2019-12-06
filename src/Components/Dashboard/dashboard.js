import React, { useState, useEffect } from 'react';
import QuestionItem from './questionItem';
// import Search from './search';
import Filter from './filter';
import QuestionButton from '../questionButton';
import MainNav from '../Nav/mainNav';
import SortButton from './sortButtons'
import {
  getQuestionItemQuery,
  fetchMoreQuestion
} from '../../graphQL/queries';
import { useQuery } from 'react-apollo';

const Dashboard = (props) => {

  const [sortBy, setSortBy] = useState(0)
  const questions = useQuery(fetchMoreQuestion)


  useEffect(() => {
    if (!questions.loading) console.log(questions.data,questions.data.questions[questions.data.questions.length - 1].id)
  }, [questions]);

  const loadMore = () => {

    if (!questions.loading) {
      questions.fetchMore({
        // note this is a different query than the one used in the
        // Query component
        query: fetchMoreQuestion,
        variables: { lastId: questions.data.questions[questions.data.questions.length - 1].id },
        fetchPolicy: "network-only",
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousEntry = previousResult.questions;
          const newComments = fetchMoreResult.questions;

          if (!fetchMoreResult) return previousResult;
          return { 
            questions: [...previousEntry, ...newComments],
             __typename: previousEntry.__typename
            }
        }
      })
    }
  }

  return (
    <div>
      <MainNav />
      <div className="dashboard-container">
        <div className="dashboard-top">
          <SortButton setSort={setSortBy} />
          {!questions.loading && <QuestionItem {...props} sortByKey={sortBy} data={questions.data} onLoad={ () => {
            questions.fetchMore({
              // note this is a different query than the one used in the
              // Query component
              query: fetchMoreQuestion,
              variables: { lastId: questions.data.questions[questions.data.questions.length - 1].id },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const previousEntry = previousResult.questions;
                const newComments = fetchMoreResult.questions;

                if (!fetchMoreResult) return previousResult;
                return {
                  questions: [...previousEntry, ...newComments],
                  __typename: previousEntry.__typename
                }
              }
            })
          }
           
          } />}
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