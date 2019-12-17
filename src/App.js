import React from 'react';
import './SASS/index.scss';
import { Route } from 'react-router-dom';
import LoginRoute from './Route/loginRoute';
import SignupRoute from './Route/signupRoute';
import QuestionFormRoute from './Route/questionFormRoute';
import DashboardRoute from './Route/dashboardRoute';
import QuestionDetailPage from './Route/questionDetailRoute';
import Search from './Route/searchRoute';
import Helmet from 'react-helmet';


function App(props) {
  
  return (
    <>
    <Helmet>
      <title>Questr</title>
      <meta name="description" content="Questr, an Open Source platform giving student a place they can ask questions related to their classes
      and professors. Which allow them to build communities that's good enough to support themselves and other
      individuals who don't have tutors or friends to study with." />
      <meta name="keywords" content="react,seo,helmet" />   
    </Helmet>
    <div className="App">
      <Route exact path='/login' component={LoginRoute} />
      <Route exact path='/signup' component={SignupRoute} />
      <Route exact path='/add-question' component={QuestionFormRoute} />
      <Route exact path='/' component={DashboardRoute} />
      <Route exact path='/question-detail/:id' component={QuestionDetailPage} />
      <Route exact path='/search=:searchKey' render={(props) => <Search {...props} />} />
    </div>
    </>
  );
}

export default App;
