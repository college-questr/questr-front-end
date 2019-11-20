import React from 'react';
import { graphql } from 'react-apollo'
import { getQuestionItemQuery } from '../graphQL/queries';

const QuestionItem = (props) => {

  const displayData = () => {
    var data = props.data;
    if (data.loading) {
      return (<div>Loading questions</div>)
    } else {
      return data.questions.map(question => {
        return (
          <div key={question.id} className="item-container">
            <div className="upvote">
              <p className="votes">{question.votes}</p>
              <p>{question.answer.length}</p>
            </div>
            <div className="middle">
              <h1>{question.questionTitle}</h1>
              <div className="tags">
                <button>{question.tag.tag}</button>
              </div>
              {/* <div className="createdAt">
                <p>{question.createdAt}</p>
              </div> */}
            </div>
          </div>
        )
      })
    }
  }
  console.log(props)

  return <div>{displayData()}</div>
}

export default graphql(getQuestionItemQuery)(QuestionItem);