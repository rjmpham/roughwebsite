import React from 'react';
import img from './profile.jpeg';

function Profile() {
  return (
    <img src={img} style={{width: 200}} fluid alt='Profile' />
  );
}

export default Profile;