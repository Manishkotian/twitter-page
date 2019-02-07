import React, { Component } from 'react';
import '../twitter.css';

class Avatar extends Component {
  render() {       
      const {width,height,src,classStyle} = this.props;
    return (
        <img src={src} width={width} height={height} alt="" className={classStyle}/>
    );
  }
}

export default Avatar;
