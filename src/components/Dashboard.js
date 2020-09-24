import React from 'react'
import {FormField, Button} from '../components/styled-components';
import {useHistory} from 'react-router-dom';

function Dashboard () {

    const history = useHistory();

    return(
        <FormField>
            <h1>Dashboard</h1>
            <Button onClick={()=>history.push("/viewstudents")}>Go to Student List</Button>
            <Button onClick={()=>history.push("/viewreminders")}>Go To Reminders</Button>
        </FormField>
    );
}

export default Dashboard;