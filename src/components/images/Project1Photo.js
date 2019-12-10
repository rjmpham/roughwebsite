import React from 'react';
import img from './profile.jpeg';

function Project1Photo() {
  return (
    <img src={img} style={{width: 200}} fluid alt='Profile' />
  );
}

export default Project1Photo;