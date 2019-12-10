import React from 'react';
import Profile from './images/profile';

function About() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='container'>
            <div className='one'>
                <Profile/>
            </div>

            <p className='two'>
                
                I am a recent graduate form The University of Calgary with a lot of experience with Java and React. 
            </p>
          </div>

      </header>
    </div>
  );
}

export default About;