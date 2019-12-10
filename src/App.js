import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
//import Santi from './components/demo/Santi'

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
                <Route path='/projects' exact component ={Projects}/>
                <Route path='/resume' exact component ={Resume}/>
                <Route path='/contact' exact component ={Contact}/>
                {/*<Route path='/santi' exact component ={Santi}/>*/}

            </Switch>
        </div>      
    </Router>

  );
}

export default App;
