import React, {useState} from "react";
import axiosWithAuth from "./axiosWithAuth";
import {useHistory} from 'react-router-dom';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import { DATA_REMINDERS } from "../store/actions";


const ReminderForm = ({postTo}) => {
    const history = useHistory('');
    const [reminder, setReminder] = useState({
        title: "",
        body: ""
    });

    const handleChanges = e => {
        setReminder({...reminder, [e.target.name]: e.target.value})
        console.log(reminder);
    };

    const submitForm = e => {
        e.preventDefault();
        const newReminder = {
            user_id: localStorage.getItem('professorID'),
            message: reminder.title,
            
        }
        
        console.log(newReminder)

        postTo(DATA_REMINDERS, newReminder);
        /*axiosWithAuth().post('/reminders', newReminder)
        .then(response => {
            console.log('New reminder added to messages: ', response)
            //props.setTrigger(!props.trigger)
            history.push('/reminderlist')
        })
        .catch(err => {
            console.log(`Here is the error: ${err}`)
        })*/
        setReminder({title: "", body: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <FormInfo>
            <label htmlFor='name'>Student Name</label>
            <Input 
                id= "name"
                type="text"
                name= "name"
                onChange={handleChanges}
                value={reminder.name}
            />

            <label htmlFor='date'>Reminder Date</label>
            <Input
            
                id= "date"
                type="text"
                name= "date"
                onChange={handleChanges}
                value={reminder.date}
                
            />
            <label htmlFor='time'>Reminder Time</label>
            <Input
            
                id= "time"
                type="text"
                name= "time"
                onChange={handleChanges}
                value={reminder.time}
                
            />
            <label htmlFor='info'>Reminder Text</label>
            <Input
            
                id= "info"
                type="text"
                name= "info"
                onChange={handleChanges}
                value={reminder.info}
                
            />
            <label htmlFor='check'>Send to student</label>
            <Input
            
                id= "check"
                type="checkbox"
                name= "check"
                onChange={handleChanges}
                value={reminder.check}
                
            />

            </FormInfo>
{/* 
            <label htmlFor='body'>Reminder Details</label>
            <textarea 
                id= "body"
                type="text"
                name= "body"
                onChange={handleChanges}
                value={reminder.body}
            /> */}
            <Button type='submit'>Add Reminder</Button>
        </form>
    )
}

export default ReminderForm;