import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import axiosWithAuth from "./axiosWithAuth";
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import { DATA_STUDENTS, postTo } from "../store/actions";
import {connect} from "react-redux";

const defaultValues = {
    name: "",
    password: "",
    confirmPassword: "",
}

const StudentForm = props => {
    const history = useHistory('');
    const [student, setStudent] = useState(defaultValues);

    const handleChanges = e => {
        setStudent({...student, [e.target.name]: e.target.value})
        console.log(student);
    };

    const submitForm = e => {
        e.preventDefault();
        const newStudent={
            name: student.name,
            password: student.password,
            professor_id: localStorage.getItem('professorID'),
        }
        console.log(newStudent);
     
        props.postTo(DATA_STUDENTS, newStudent);
        /*axiosWithAuth().post('/students', newStudent)
        .then(response =>{
            console.log('New Student Created: ', response)
            //props.setTrigger(!props.trigger)
            history.push('/studentlist')
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })*/
        setStudent(defaultValues);
    };

    return (
        <form onSubmit={submitForm}>
            <FormInfo>
            <label htmlFor='studentName'>Student Name</label>
            <Input 
                id= "studentName"
                type="text"
                name= "name"
                onChange={handleChanges}
                value={student.name}
            />

            <label htmlFor='password'>Password</label>
            <Input 
                id= "password"
                type="text"
                name= "password"
                onChange={handleChanges}
                value={student.password}
            />
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Input 
                id= "confirmPassword"
                type="text"
                name= "confirmPassword"
                onChange={handleChanges}
                value={student.confirmPassword}
            />
            </FormInfo>
            <Button type='submit'>Add Student</Button>
        </form>
    )
}

export default connect(() => { return {
    //props
}},{
    //actionMakers
    postTo,
})(StudentForm);