/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import signup from './components/user/signup';
//import { Router, Route, browserHistory } from 'react-router';
import {
  BrowserRouter,
  Route,
  //Link
} from 'react-router-dom';

const Root = () => {

  return (
    
      <BrowserRouter >
      <div className="container">
        <Route path="/" exact={true} component={FoodJokes}/>
        <Route path="/special" component={CelebrityJokes}/>

        <Route path="/signup" component={signup}/>

       </div>
      </BrowserRouter>

  )
}

ReactDOM.render(<Root />, document.getElementById('root'));