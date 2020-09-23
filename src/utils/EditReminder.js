import React, {useState} from "react";
import axiosWithAuth from "./axiosWithAuth";
import {useHistory} from 'react-router-dom';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import { DATA_REMINDERS } from "../store/actions";

const defaultValues = {
    title: "",
    body: "",
    datetime: "",
    student_id: 1,
    sent: false,
}

const ReminderForm = ({postTo}) => {
    const history = useHistory('');
    const [reminder, setReminder] = useState(defaultValues);

    const handleChanges = e => {
        setReminder({...reminder, [e.target.name]: e.target.value})
        console.log(reminder);
    };

    const submitForm = e => {
        e.preventDefault();
        const newReminder = {
            ...reminder,
            professor_id: localStorage.getItem('professorID'),
        }
        
        console.log(newReminder)

        postTo(DATA_REMINDERS, newReminder);
        setReminder(defaultValues);

        /*axiosWithAuth().post('/reminders', newReminder)
        .then(response => {
            console.log('New reminder added to messages: ', response)
            //props.setTrigger(!props.trigger)
            history.push('/reminderlist')
        })
        .catch(err => {
            console.log(`Here is the error: ${err}`)
        })*/
    };

    return (
        <form onSubmit={submitForm}>
            <FormInfo>
            <label htmlFor='title'>Message Title</label>
            <Input 
                id= "title"
                type="text"
                name= "title"
                onChange={handleChanges}
                value={reminder.title}
            />

            <label htmlFor='datetime'>Date</label>
            <Input
            
                id= "datetime"
                type="text"
                name= "datetime"
                onChange={handleChanges}
                value={reminder.datetime}
                
            />
            <label htmlFor='body'>Text</label>
            <Input
            
                id= "body"
                type="text"
                name= "body"
                onChange={handleChanges}
                value={reminder.body}
                
            />
            <label htmlFor='sent'>Send to student</label>
            <Input
            
                id= "sent"
                type="checkbox"
                name= "sent"
                onChange={handleChanges}
                value={reminder.sent}
                
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