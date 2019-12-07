import React ,{useEffect, useState} from 'react';
import { graphql } from 'react-apollo';
import Style from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { getQuestionItemQuery,fetchMoreQuestion } from '../../graphQL/queries';
import {dateBuilder} from '../Utilities/dateBuilder';


const QuestionItem = ({ data, sortByKey, onLoad, ...props} ) => {

  const colorPicker = (count) => {

    let decidedColor = "";

    if (count > 0) {
      decidedColor = "green";
    } else if (count < 0) {
      decidedColor = "red";
    } else {
      decidedColor = "";
    }

    return decidedColor;
  }

  const sortByCreated = (a,b) => {
    let aDate = new Date(a.createdAt)
    let bDate = new Date(b.createdAt)
    return aDate.getTime() < bDate.getTime() ? 1 : -1;
  } 

  const sortByAnswered = (a, b) => a.answer.length > b.answer.length ? -1 : 1;

  const sortByUnanswered = (a, b) => (a.answer.length < b.answer.length) ? -1 : 1;
  
  const sortByVotes = (a, b) => (a.votes > b.votes) ? -1 : 1;

  
  const redirect = (id) => {
    props.history.push(`/question-detail/${id}`)
  }


  /**
   * this decides how the questions are sorted
   * @param key 
   */
  const sortData = (key) => {
    switch(key){
      case 0:
        return data.questions.sort(sortByCreated);
      case 1:
        return data.questions.sort(sortByAnswered);
      case 2:
        return data.questions.sort(sortByUnanswered);
      case 3: 
        return data.questions.sort(sortByVotes)
      default:
        return data.questions.sort(sortByCreated);
    }

  }

  // const  handleScroll = () => {
  //   const body = document.body
  //   if (body.scrollHeight - body.offsetHeight === document.documentElement.scrollTop){
  //     onLoad
  //   };
  // }

  //sorts the data when data is loaded, sortByKey is coming fron the sortButtons.js
  if (!data.loading) {
    sortData(props.sortByKey);
  }

  // const moreQuestions = useQuery(fetchMoreQuestion())

  useEffect(()=> {
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('event', handleScroll);
    // }
  }, [data])

  return (
    <>
      {data.loading ?
        <h1>"Loading" </h1> :
        data.questions.map(question => {
          return (
            <div
              key={question.id} 
              className="item-container"
            >
              <div className="upvote">
                <div className={`votes ${colorPicker(question.votes)}`}>
                  <p className='count'>{question.votes}</p>
                  <p className="label">votes</p>
                </div>
                <div className={`answer-count ${colorPicker(question.answer.length)} `}>
                  <p className='count'>{question.answer.length}</p>
                  <p className="label">answers</p>
                </div>
              </div>
              <div className="middle">
                <h1 onClick={() => redirect(question.id)}>
                  {question.questionTitle}
                </h1>
                <div className="tags">
                  {question.tag.map(el => <button>{el.tag}</button>)}
                </div>
                <div className="createdAt">
                <p>{dateBuilder(question.createdAt)}</p>
              </div>
              </div>
            </div>
          )
        })
      }
    </>
  )

}

export default QuestionItem;

