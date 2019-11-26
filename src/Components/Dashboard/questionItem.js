import React from 'react';
import { graphql } from 'react-apollo';
import Style from 'styled-components';
import { getQuestionItemQuery } from '../../graphQL/queries';


const QuestionItem = (props) => {

  console.log(props);
  const colorPicker = (count) => {
    let decidedColor = "";

    if (count > 0){
      decidedColor="green";
    } else if (count < 0){
      decidedColor = "red";
    } else{
      decidedColor = "";
    }

    return decidedColor;
  }

  const redirect = (id) => {
    console.log(props)
    props.history.push(`/question-detail/${id}`)
  }
  let data = props.data;
  return (
    <>
      {data.loading ? 
      <h1>"Loading" </h1>: 
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
                {/* <div className="createdAt">
                <p>{question.createdAt}</p>
              </div> */}
              </div>
            </div>
          )
        })
      }
      
    </>
    )

}

export default graphql(getQuestionItemQuery)(QuestionItem);

