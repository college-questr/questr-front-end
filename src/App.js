import React from 'react';
import './SASS/index.scss'
import {Route} from 'react-router-dom';
import LoginRoute from './Route/loginRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={LoginRoute} />
    </div>
  );
}

export default App;
