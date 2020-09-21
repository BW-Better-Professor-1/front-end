import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from '../src/utils/PrivateRoute';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Dashboard from './components/Dashboard';
import StudentList from './components/ViewStudents';
import ProjectList from './components/ViewProjects';
import ReminderList from './components/ViewReminders';
import Projects from './utils/Projects';
import {Nav, NavLinksContainer} from './components/styled-components';
import './components/styles.css';

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
            <Link className="link" to={`/viewstudents`}>Students</Link>
            <Link className="link" to={`/viewreminders`}>My Reminders</Link>
          </NavLinksContainer>
        </Nav>
          {/* <Navigation /> */}
        {/* <Dashboard /> */}
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/dashboard' component={Dashboard}/>
          <PrivateRoute path='/viewstudents' component={StudentList}/>
          <PrivateRoute path='/viewprojects/:id' component={ProjectList}/>
          <PrivateRoute path='/viewreminders' component={ReminderList}/>
        </Switch>

    </Router>
    </div>
  );
}

export default App;