import React from 'react';

function HomepageImage() {
  const url = 'https://cdn.filestackcontent.com/XYrHCaFGRSaq0EPKY1S6';
  return (
    <img src={url} style={{width: 650}} fluid alt='The Golden Gate Bridge' />
  );
}

export default HomepageImage;