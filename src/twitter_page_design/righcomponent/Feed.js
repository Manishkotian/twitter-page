import React, { Component } from 'react';
import Avatar from '../leftcomponent/Avatar.js';

class Feed extends Component {
  render() {       
      const {feedDetails} = this.props;
      return(
        feedDetails[0].tweetlist.map((tweets,index) => 
        <div className="row" key={index}>
            <div className="col-md-2">
            <Avatar width={'70px'} height={'60px'} src={feedDetails[0].profileImage} classStyle="rounded-circle"/>
            </div>
            <div className="col-md-10">
            <p><b>{feedDetails[0].profileName}</b>&nbsp;<i className="fa fa-map-marker"></i>&nbsp;{feedDetails[0].location} &nbsp;{feedDetails[0].date}</p>
                <p>{tweets}</p>
                <hr/>
            </div>
        </div>
  ));
        }
        }

export default Feed;
