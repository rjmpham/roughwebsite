import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import What from './components/What';
import Resume from './components/Resume';
import Contact from './components/Contact';

import {BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">

            <NavBar/>

            <Switch>
                <Route path='/' exact component ={Home}/>
                <Route path='/home' exact component ={Home}/>
                <Route path='/about' exact component ={About}/>
                <Route path='/what' exact component ={What}/>
                <Route path='/resume' exact component ={Resume}/>
                <Route path='/contact' exact component ={Contact}/>
            </Switch>
        </div>      
    </Router>

  );
}

export default App;
