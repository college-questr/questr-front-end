import React from 'react'
import QuestionDetail from '../Components/QuestionDetails/questionDetail';
import Editor from '../Components/editor';
import Subscribe from '../Components/subscribe';
import RelatedQuestions from '../Components/QuestionDetails/relatedQuestions';
import { useQuery } from '@apollo/react-hooks';
import { GET_QUESTION_BY_ID } from '../graphQL/queries'

import {
  questionDetailObj
} from '../Components/testComponentData'
import MainNav from '../Components/Nav/mainNav';


const QuestionDetailPage = (props) => {

  const { loading, error, data } = useQuery(GET_QUESTION_BY_ID("5dd1df42f19c8a660ecb966d"));

  console.log(data);
  return (
    <>
      <MainNav />
      <div className='question-detail-contianer'>
        <div className='left-detail'>
          < QuestionDetail questionDetails={questionDetailObj} />
          <div className="header-container">
            <h1>Post Your Answer </h1>
            <p>Before you post your answer, please take a moment to go through our tips on great answers.</p>
          </div>
          <div className="editor">
            <Editor />
          </div>
        </div>
        <div className="right-detail">
          <Subscribe followers={questionDetailObj.followers} />
          <div className="related-questions">
            <h1>Related Questions</h1>

          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionDetailPage;