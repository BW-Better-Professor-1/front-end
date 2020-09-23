import React, { useEffect } from 'react'
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import StudentList from './ViewStudents';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";

function Dashboard ({students}) {

    const history = useHistory();

    return(
        <FormField>
            <h1>Dashboard</h1>
            <Button onClick={()=>history.push("/viewstudents")}>Go to Student List</Button>
            <Button onClick={()=>history.push("/viewreminders")}>Go To Reminders</Button>
            <div>
                {students && students.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
        </FormField>
    );
}

export default connect((state) => { return {
    //props
    students: state.students,
}},{
    //actionMakers
})(Dashboard);