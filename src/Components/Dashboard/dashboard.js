import React from 'react';
import QuestionItem from './questionItem';
// import Search from './search';
import Filter from './filter';
import QuestionButton from '../questionButton';
import MainNav from '../Nav/mainNav';

const Dashboard = (props) => {
  return (
    <div>
      <MainNav />
      <div className="dashboard-container">
        <div className="dashboard-top">
          <QuestionItem {...props}/>
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