import React from 'react';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';

const Reminders = props => {
    return (
    
      <div className="reminder-list">
        {props.reminders.map(reminder => (
          <div className="reminder" key={reminder.id}>
            <h2>{reminder}</h2>
            <p>{reminder}</p>
          </div>
        ))}
      </div>

    );
  };

export default Reminders;