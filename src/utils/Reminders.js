import React from 'react';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';

const Reminders = props => {
    return (
    
      <div className="reminder-list">
        {props.reminders.map(reminder => (
          <div className="reminder" key={reminder.id}>
            <h2>{reminder.title}</h2>
            <p>{reminder.body}</p>
            <p>{reminder.sent? "Sent" : "Not sent"}</p>
          </div>
        ))}
      </div>

    );
  };

export default Reminders;