import React from 'react'
import {FormField, Button} from '../components/styled-components';
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";

function Dashboard ({students}) {

    const history = useHistory();

    return(
        <FormField>
            <h1>Dashboard</h1>
            <Button onClick={()=>history.push("/studentlist")}>Go to Student List</Button>
            <Button onClick={()=>history.push("/reminderlist")}>Go To Reminders</Button>
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