import React, { useEffect } from 'react';
import {connect} from "react-redux";
import PrivateRoute from '../utils/PrivateRoute';
import Dashboard from './Dashboard';
import StudentList from './ViewStudents';
import ProjectList from './ViewProjects';
import ReminderList from './ViewReminders';
import { getInitialData } from '../store/actions';
//import ViewStudent from './ViewStudent';
import ViewProject from './ViewProject';

const SessionContainer = ({getInitialData}) => {
    useEffect(() => {
        getInitialData();
    }, [getInitialData]);

    return (
        <>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            {/*<PrivateRoute path='/viewstudents/:id' component={ViewStudent}/> students currently can't be updated or deleted in API, so disable this route */}
            <PrivateRoute exact path='/viewstudents' component={StudentList}/>
            <PrivateRoute path='/viewprojects/:id' component={ViewProject} />
            <PrivateRoute exact path='/viewprojects' component={ProjectList}/>
            <PrivateRoute exact path='/viewreminders' component={ReminderList}/>
        </>
    );
}

export default connect(() => { return {
    //props
}},{
    //actionMakers
    getInitialData
})(SessionContainer);