import React from 'react';
import img from './profile.jpeg';

function HomepageImage() {
  return (
    <img src={img} style={{width: 250}} fluid alt='Profile' />
  );
}

export default HomepageImage;