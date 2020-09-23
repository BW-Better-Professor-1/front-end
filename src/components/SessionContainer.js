import React, { useEffect } from 'react';
import {connect} from "react-redux";
import PrivateRoute from '../utils/PrivateRoute';
import Dashboard from './Dashboard';
import StudentList from './ViewStudents';
import ProjectList from './ViewProjects';
import ReminderList from './ViewReminders';
import { getInitialData } from '../store/actions';

const SessionContainer = ({getInitialData}) => {
    useEffect(() => {
        getInitialData();
    }, [getInitialData]);

    return (
        <>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <PrivateRoute path='/viewstudents' component={StudentList}/>
            <PrivateRoute path='/viewprojects' component={ProjectList}/>
            <PrivateRoute path='/viewreminders' component={ReminderList}/>
        </>
    );
}

export default connect(() => { return {
    //props
}},{
    //actionMakers
    getInitialData
})(SessionContainer);