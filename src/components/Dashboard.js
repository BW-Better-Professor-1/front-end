import React from 'react'
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import StudentList from './ViewStudents';
import {useHistory} from 'react-router-dom';


export default function Dashboard () {

    const history = useHistory();

    return(
        <FormField>
            <h1>Dashboard</h1>
            <Button onClick={()=>history.push("/studentlist")}>Go to Student List</Button>
            <Button onClick={()=>history.push("/reminderlist")}>Go To Reminders</Button>
        </FormField>
    );
}