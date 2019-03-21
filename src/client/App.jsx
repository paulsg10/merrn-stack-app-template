import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import ContainerOne from './containers/ContainerOne';
import ContainerTwo from './containers/ContainerTwo';
import ContainerThree from './containers/ContainerThree';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="navbar-item">MERRN</Link>
          <Link to="/containerOne" className="navbar-item">Container One</Link>
          <Link to="/containerTwo" className="navbar-item">Container Two</Link>
          <Link to="/containerThree" className="navbar-item">Container Three</Link>
        </nav>
        <Route exact path="/" />
        <Route path="/containerOne" component={ContainerOne} />
        <Route path="/containerTwo" component={ContainerTwo} />
        <Route path="/containerThree" component={ContainerThree} />
      </div>
    </Router>
  );
};

export default App;
