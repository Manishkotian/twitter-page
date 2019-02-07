import React, { Component } from 'react';
import tweetDetails from './twitterDetails.js';
import ProfileMenu from './leftcomponent/profileMenu.js';
import TweetFeedDetails from './righcomponent/TweetFeedDetails.js';
import Avatar from './leftcomponent/Avatar.js';

class TwitterPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            userDetails: [],
            id: null
        }
    };
    componentWillMount(){
        const {id} = this.props.match.params;
        let userDetails = this.state.userDetails.slice();
        const userDetail = tweetDetails.userValues.filter(value => id === value.id);
        userDetails.push(userDetail[0]);
        this.setState({userDetails,id:id});
    }
  render() {       
      const {userDetails,id} = this.state
      console.log(userDetails[0]);
    return (
        <React.Fragment>
            <div className="row">
            <Avatar width={'100%'} height={'400px'} src={userDetails[0].profileImage}/>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ProfileMenu profileDetails={userDetails}/>
                </div>    
                <div className="col-md-8">
                   <TweetFeedDetails tweetDetails={userDetails} id={id}/>
                </div>  
            </div>          
        </React.Fragment>        
    );
  }
}

export default TwitterPage;
