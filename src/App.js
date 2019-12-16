import React from 'react';
import './SASS/index.scss';
import { Route } from 'react-router-dom';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import QuestionFormRoute from './Route/questionFormRoute';
import DashboardRoute from './Route/dashboardRoute';
import QuestionDetailPage from './Route/questionDetailRoute';
import Search from './Route/searchRoute';


function App(props) {
  
  return (
    <div className="App">
      <Route exact path='/login' component={LoginRoute} />
      <Route exact path='/signup' component={SignupRoute} />
      <Route exact path='/add-question' component={QuestionFormRoute} />
      <Route exact path='/' component={DashboardRoute} />
      <Route exact path='/question-detail/:id' component={QuestionDetailPage} />
      <Route exact path='/search=:searchKey' render={(props) => <Search {...props} />} />
    </div>
  );
}

export default App;
