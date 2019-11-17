import React from 'react'
import QuestionDetail from '../Components/QuestionDetails/questionDetail';
import Editor from '../Components/editor';
import Subscribe from '../Components/subscribe';
import RelatedQuestions from '../Components/QuestionDetails/relatedQuestions';

import {
  questionDetailObj
} from '../Components/testComponentData'

const QuestionDetailPage = (props) => {
  return (
    <>
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