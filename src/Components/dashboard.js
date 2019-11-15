import React from 'react';
import QuestionItem from './questionItem';
import Search from './search';
import Filter from './filter';
import QuestionButton from './questionButton';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top">
        <Search />
        {/* Filler Questions */}
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </div>
      <div className="dashboard-side">
        <QuestionButton />
        <Filter />
      </div>
    </div>
  )
}

export default Dashboard;