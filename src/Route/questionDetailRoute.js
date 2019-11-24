import React from 'react'
import QuestionDetail from '../Components/QuestionDetails/questionDetail';
import Editor from '../Components/editor';
import Subscribe from '../Components/subscribe';
import RelatedQuestions from '../Components/QuestionDetails/relatedQuestions';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_QUESTION_BY_ID_WITH_ANSWERS } from '../graphQL/queries';
import { POST_ANSWER } from '../graphQL/mutations'


import {
  questionDetailObj
} from '../Components/testComponentData'
import MainNav from '../Components/Nav/mainNav';


const QuestionDetailPage = (props) => {
  const { loading, error, data, refetch } = useQuery(GET_QUESTION_BY_ID_WITH_ANSWERS(`${props.match.params.id}`));
 
  // post answer and and update render
  const [postAnswer, postData] = useMutation(POST_ANSWER, {
    refetchQueries: result => [
      { query: GET_QUESTION_BY_ID_WITH_ANSWERS(`${props.match.params.id}`) }
    ]
  });
  return (
    <>
      <MainNav />
      <div className='question-detail-contianer'>
        <div className='left-detail'>
          {data && < QuestionDetail questionDetails={data} />}
          <div className="header-container">
            <h1>Post Your Answer </h1>
            <p>Before you post your answer, please take a moment to go through our tips on great answers.</p>
          </div>
          <div className="editor">
            <Editor questionId={props.match.params.id} postAnswer={postAnswer} />
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