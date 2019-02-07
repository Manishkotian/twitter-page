import React, { Component } from 'react';
import Avatar from './Avatar.js';
import '../twitter.css';
class ProfileDetails extends Component {
  render() {       
      const {profileDetails} = this.props;
    return (
      <React.Fragment>
        <div>
          <Avatar width={'250px'} height={'200px'} src={profileDetails[0].profileImage} classStyle={"rounded profileImage"}/>
        </div>
          <div className="profileMenuDetails">
            <span><b>Username</b> : {profileDetails[0].profileName}</span><br/>
            <span><b>Position</b> : {profileDetails[0].position}</span><br/>
            <span><i className="fa fa-map-marker"></i>&nbsp;{profileDetails[0].location}</span>
          </div>
      </React.Fragment>      
    );
  }
}

export default ProfileDetails;
