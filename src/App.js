import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Resume from './components/Resume';
import Who from './components/Who';
import What from './components/What';
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
                <Route path='/' exact component ={Who}/>
                <Route path='/resume' exact component ={Resume}/>
                <Route path='/what' exact component ={What}/>
            </Switch>
        </div>      
    </Router>

  );
}

export default App;
