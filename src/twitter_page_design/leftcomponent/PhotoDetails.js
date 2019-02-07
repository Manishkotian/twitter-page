import React, { Component } from 'react';
import Avatar from './Avatar.js';
class PhotoDetails extends Component {
  render() {       
      const {imageSrc} = this.props;
    return (       
        <Avatar src={imageSrc } width={'100px'} height={'50px'}/>
    );
  }
}

export default PhotoDetails;
