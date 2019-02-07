import React, { Component } from 'react';
import TwitterPage from './TwitterPage.js';
import NoPage from './ErrorPages/NoPage.js';
import {
    BrowserRouter as Router,
    Route,
    Switch,Redirect
  } from 'react-router-dom'
  
class Home extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
            <Route path="/:id/tweets" component={TwitterPage}/>
            <Redirect from="/" to="/1/tweets"></Redirect>           
            <Route path="" component={NoPage}/>
            </Switch>          
          </div>               
        </Router>
    );
  }
}

export default Home;
