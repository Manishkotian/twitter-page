import React, { Component } from 'react';
import TweetFeed from './TweetFeed.js';
import NoPage from '../ErrorPages/NoPage.js';
import '../twitter.css';
import {
    Route,
    Link,
    Switch,BrowserRouter as Router
  } from 'react-router-dom'

class TweetFeedDetails extends Component {
  render() {       
      const {tweetDetails,id} = this.props;
    return (
     <React.Fragment>
         <Router>
             <div className="header-margin border border-dark rounded">
             <ul className="list-inline">
                <li className="list-inline-item"><Link to={`/${id}/tweets`}>TWEETS</Link><br/>{tweetDetails[0].tweetCount}</li>
                <li className="list-inline-item"><Link to={`/${id}/following`}>FOLLOWING</Link><br/>{tweetDetails[0].followingCount}</li>
                <li className="list-inline-item"><Link to={`/${id}/followers`}>FOLLOWERS</Link><br/>{tweetDetails[0].followersCount}</li>
                <li className="list-inline-item"><Link to={`/${id}/likes`}>LIKES</Link><br/>{tweetDetails[0].likeCount}</li>
                <li className="list-inline-item"><Link to={`/${id}/moments`}>MOMENTS</Link><br/>{tweetDetails[0].momentCount}</li>
                <hr/>
            </ul>
            <Switch>
            
            <Route path="/:id/following" exact component={NoPage}/>}/>
            <Route path="/:id/followers" exact component={NoPage}/>}/>
            <Route path="/:id/likes" exact component={NoPage}/>}/>
            <Route path="/:id/moments" exact component={NoPage}/>}/>
            <Route path="/:id/tweets" exact component={()=><TweetFeed tweetDetails={tweetDetails} id={id}/>}/>
            <Route path="" exact component={NoPage}/>}/>
            </Switch>
             </div>
        
         </Router>         
                        
     </React.Fragment>
    );
  }
}

export default TweetFeedDetails;
