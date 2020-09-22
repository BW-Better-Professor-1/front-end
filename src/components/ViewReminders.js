import React, {useState, useEffect} from 'react';
import AddReminder from '../utils/EditReminder';
import Reminders from '../utils/Reminders';
import axiosWithAuth from '../utils/axiosWithAuth';
import { FormField, LoginForm } from './styled-components';
import { postTo, putTo, deleteFrom } from '../store/actions';

function ReminderList ({reminders}) { // see ViewProject for comments on Redux state
    //const [trigger, setTrigger] = useState(false);
    //const [reminders, setReminders] = useState([]);
    const id = localStorage.getItem('professorID')
    /*useEffect(() => {
        axiosWithAuth().get(`/reminders`)
        .then(response =>{
            console.log('Reminder Created: ', response.data)
            setReminders(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])*/


    return(
        <LoginForm>
        <FormField>
 
            <h1>My Reminders</h1>
            <AddReminder postTo={postTo} />
            <Reminders reminders={reminders} />
       
        </FormField>
    </LoginForm>
    )
}

export default connect((state) => { return {
    //props
    reminders: state.reminders,
}},{
    //actionMakers
    postTo,
    putTo,
    deleteFrom,
})(ReminderList);