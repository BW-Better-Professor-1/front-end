import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from 'react-router-dom';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import { DATA_STUDENTS, putTo } from "../store/actions";
import {connect} from "react-redux";

const defaultValues = {
    name: "",
    password: "",
    confirmPassword: "",
}

const ViewStudent = ({students, putTo}) => {
    const {id} = useParams();
    const [student, setStudent] = useState(defaultValues);

    useEffect(() => {
        for(let i = 0; i < students.length; i++){
            if(String(students[i].id) === id){
                setStudent(students[i]);
                return;
            }
        }
    }, [students, id])

    const handleChanges = e => {
        setStudent({...student, [e.target.name]: e.target.value})
        //console.log(student);
    };

    const submitForm = e => {
        e.preventDefault();
        const newStudent={
            name: student.name,
            password: student.password,
            professor_id: localStorage.getItem('professorID'),
        }
        //console.log(newStudent);
     
        putTo(DATA_STUDENTS, newStudent);
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
            <Button type='submit'>Save Student</Button>
            <Link to="viewstudents"><Button>Back to Students</Button></Link>
        </form>
    )
}

export default connect((state) => { return {
    //props
    students: state.students,
}},{
    //actionMakers
    putTo,
})(ViewStudent);