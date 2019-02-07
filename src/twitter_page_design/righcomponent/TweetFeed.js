import React, { Component } from 'react';
import Feed from './Feed.js';
import NoPage from '../ErrorPages/NoPage.js';

import {
    Route,
    Link,
    Switch,
    Redirect,
    BrowserRouter as Router
  } from 'react-router-dom'
class TweetFeed extends Component {
  render() {
      const {tweetDetails,id} = this.props;
    return (
        <React.Fragment>
            <Router>
                <div className="header-margin border border-dark rounded">
                <ul className="list-inline">
                <li className="list-inline-item"><Link to={`/${id}/tweets/tweet`}>Tweets</Link></li>
                <li className="list-inline-item"><Link to={`/${id}/tweets/tweetReplies`}>Tweets & replies</Link></li>
                <li className="list-inline-item"><Link to={`/${id}/tweets/media`}>Media</Link></li>
                <hr/>
            </ul>
            <Switch>
              <Route path="/:id/tweets/tweet" exact component={()=><Feed feedDetails={tweetDetails}/>}/>
              <Route path="/:id/tweets/tweetReplies" exact component={NoPage}/>}/>
              <Route path="/:id/tweets/media" exact component={NoPage}/>}/>
              <Redirect from={`/${id}/tweets`} to={`/${id}/tweets/tweet`}></Redirect>
              <Route path="" exact component={NoPage}/>}/>
            </Switch>
                </div>
            
            </Router>          
            
     </React.Fragment>
    );
  }
}

export default TweetFeed;
