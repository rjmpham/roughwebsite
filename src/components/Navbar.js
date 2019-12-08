import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle = {
        color: 'white'
    };
    return (
        <div className='nav-bar'>
            <link href='http://fonts.googleapis.com/css?family=Oleo+Script' rel='stylesheet' type='text/css'></link>
            
            <h1>Richard Pham</h1>
            <u1 className='nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Who</li>
                </Link>
                <Link style={navStyle} to='/What'>
                    <li>What</li>
                </Link>
                <Link style={navStyle} to='/resume'>
                    <li>Resume</li>
                </Link>
                <Link style={navStyle} to='/Contact'>
                    <li>Contact</li>
                </Link>

            </u1>
        </div>
  );
}

export default Navbar;
