import React from 'react';
import img from './send_tx_wordless.png';
import img2 from './seed_node_usage_wordless.png';


function Project2Photo() {
  return (
        <div>            
            <img src={img} class= 'blockImage' style={{width: 300}} fluid alt='network transaction' />
            <img src={img2} style={{width: 300}} fluid alt='seed finding' />
        </div>

  );
}

export default Project2Photo;