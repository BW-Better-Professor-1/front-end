import React, {useState ,useEffect} from 'react';
import StudentForm from '../utils/EditStudent';
import Students from '../utils/Students';
import axiosWithAuth from '../utils/axiosWithAuth';
import { FormField, LoginForm } from './styled-components';
import { postTo, putTo, deleteFrom } from '../store/actions';
import {connect} from "react-redux";

function StudentList ({students}) { // see ViewProject for comments on Redux state

    //const [students, setStudents] = useState([]);
    //const [trigger, setTrigger] = useState(false);
    const id = localStorage.getItem('professorID')
    /*useEffect(() => {
        axiosWithAuth().get(`users/${id}/students`)
        .then(response =>{
            console.log('response', response)
            setStudents(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])*/

    return(
        <LoginForm>
        <FormField>
      
            <h1>My Students</h1>
            <StudentForm postTo={postTo} />
            <Students students={students}/>
      
        </FormField>
    </LoginForm>
    )
}

export default connect((state) => { return {
    //props
    students: state.students,
}},{
    //actionMakers
    postTo,
    putTo,
    deleteFrom,
})(StudentList);