import React from 'react';

const QuestionItem = () => {


  return (
    <div className="item-container">
      <div className="upvote">
        <p className="votes"># of votes</p>
        <p># of answers</p>
      </div>

      <div className="middle">
        <h1>Some Question</h1>
        <div className="tags">
          <button>Tag</button>
          <button>Tag</button>
          <button>Tag</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionItem;