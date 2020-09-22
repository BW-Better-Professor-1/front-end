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
            <label htmlFor=''title>Reminder</label>
            <Input 
                id= "title"
                type="text"
                name= "title"
                onChange={handleChanges}
                value={reminder.title}
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