import React from 'react';
import QuestionItem from './questionItem';

const Dashboard = () => {
  return (
    <div>
      <h1 className="test">Search Bar Insert Here</h1>

      {/* Filler Questions */}
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
  )
}

export default Dashboard;