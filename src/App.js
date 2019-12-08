import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <About/>
        <Home/>
        <Topics/>
        <HomepageImage />
        <p>
          Roughdrafttttt
        </p>

    </div>
  );
}

export default App;
