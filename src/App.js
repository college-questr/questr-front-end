import React from 'react';
import './SASS/index.scss'
import { Route } from 'react-router-dom';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import QuestionFormRoute from './Route/questionFormRoute';
import DashboardRoute from './Route/dashboardRoute';


function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={LoginRoute} />
      <Route exact path='/signup' component={SignupRoute} />
      <Route exact path='/add-question' component={QuestionFormRoute} />
      <Route exact path='/dashboard' component={DashboardRoute} />
    </div>
  );
}

export default App;
