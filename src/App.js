import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from '../src/utils/PrivateRoute';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import {Nav, NavLinksContainer} from './components/styled-components';
import './components/styles.css';
import SessionContainer from './components/SessionContainer';

function App() {
  return (
    <div>
      <Router>
        <div className='App'>
          <Header />
    
          <Nav>
            <NavLinksContainer>
              <Link className='link' to={`/Signup`}>SignUp</Link>
              <Link className='link' to={`/dashboard`} >Dashboard</Link>
              <Link className="link" to={`/viewstudents`}>My Students</Link>
              <Link className="link" to={`/viewreminders`}>My Reminders</Link>
              <Link className="link" to={`/viewprojects`}>My Projects</Link>
              
            </NavLinksContainer>
          </Nav>
          {/* <Navigation /> */}
          {/* <Dashboard /> */}
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/' component={SessionContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;