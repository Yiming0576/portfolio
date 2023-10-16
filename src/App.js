import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


// Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      {/* Header */}
      <NavBar />
      <header className="App-header">
        {/* Your header content goes here */}
      </header>

      {/* Routing */}
      <div className="App-body">
        <Router>
          <div className="App-routes">
            <Routes>
              <Route path="/" exact component={Home}>
              </Route>
              <Route path="/about" component={About}>
              </Route>
              <Route path="/projects" component={Projects}>
              </Route>
              <Route path="/resume" component={Resume}>
              </Route>
              <Route path="/notfound" component={NotFound}>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>

      {/* Footer */}
      {/* Your footer content goes here */}
    </div>
  );
}

export default App;
