import React from 'react';
import Img1 from './images/Project1Photo';
import Img2 from './images/Project2Photo';
import Img3 from './images/Project3Photo';


function Projects() {
  return (
    <div className="App">

        <header className='projects'>
            <div className='projectInner'>
                <div className='projectImage'>
                    <Img1/>
                </div>
                <p className='textProject'>

                    <h2>Santorini Online</h2>
                    A digitial version of a classic game done in with React, JavaScript, HTML, and CSS.
                </p>
            </div>
            <div className='projectInner2'>
                <div className='projectImage2'>
                    <Img2/>
                </div>
                <p className='textProject2'>
                    <h2>Blockchain Clone</h2>
                    A functional clone of blockchain, written in Java, with a secure algorithm for block generation, and a peer-2-peer network architectue.
                    </p>

            </div>
            <div className='projectInner2'>
                <div className='projectImage2'>
                    <Img3/>
                </div>
                <p className='textProject2'>
                    <h2>Password Generatior Site </h2>
                    A live website hosted on AWS with a JavaScript algorithm that generates passwords, tests them for their security value.
                    The website explains tips and tricks to create and remember strong passwords. 
                    The passwords generated are checked via a popular  estimator called zxcvbn.  
                </p>

            </div>
        </header>
    </div>
  );
}

export default Projects;
