import React, { Component } from 'react';
import ProfileDetails from './ProfileDetails.js';
import PhotoDetails from './PhotoDetails.js';
import '../twitter.css';

class ProfileMenu extends Component {
  render() {       
      const {profileDetails} = this.props;
    return (
      <React.Fragment>
        <ProfileDetails profileDetails={profileDetails}/>
        <div className="col-md-12 profilePhotos">
        <p><i className="fa fa-camera"></i>&nbsp;Photos and videos</p>
            {profileDetails[0].photos.map((photo,index)=>  <PhotoDetails imageSrc = {photo} key={index}/>)}  
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileMenu;
