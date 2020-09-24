import React from 'react'
import {FormField, Button} from '../components/styled-components';
import {useHistory} from 'react-router-dom';

function Dashboard () {

    const history = useHistory();

    return(
        <FormField>
            <h1>Dashboard</h1>
            <Button onClick={()=>history.push("/studentlist")}>Go to Student List</Button>
            <Button onClick={()=>history.push("/reminderlist")}>Go To Reminders</Button>
        </FormField>
    );
}

export default Dashboard;