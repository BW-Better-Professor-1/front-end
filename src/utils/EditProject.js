import React, {useState} from 'react';
import axiosWithAuth from './axiosWithAuth';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import Projects from './Students';
import { DATA_PROJECTS } from '../store/actions';
import { postTo, putTo, deleteFrom } from '../store/actions';
import {connect} from "react-redux";

const defaultValues = { // fields match the "Projects data structure" in backend README
    project_name: "",
    description: "",
    due_date: "",
    student_id: 1,
}

const ProjectForm = ({id, postTo, students}) => {

    const [project, setProject] = useState(defaultValues);

    const handleChanges = e => {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project);
    };

    const submitForm = e => {
        e.preventDefault();
        const newProject ={
            ...project,
            professor_id: id,
            student_id: Number(project.student_id),
            completed: false,
        }
        console.log(newProject)

        postTo(DATA_PROJECTS, newProject); // calls an action (passed from ViewProjects) that sends the POST request, then adds the response to state
        
        /*axiosWithAuth().post('/projects', newProject)
        .then(response => {
            console.log('New project added to student: ', response)
            pr.setTrigger(!pr.trigger)
            
        })*/
        setProject(defaultValues);
    };

    return (
        <form onSubmit={submitForm}>
            <FormInfo>
            <label htmlFor='title'>Project Title</label>
            <Input
                id= "title"
                type="text"
                name= "project_name"
                onChange={handleChanges}
                value={project.project_name}
            />

            <label htmlFor='date'>Due Date</label>
            <Input
            
                id= "date"
                type="text"
                name= "due_date"
                onChange={handleChanges}
                value={project.due_date}
                
            />
            <label htmlFor='reminder'>Description</label>
            <Input
            
                id= "reminder"
                type="text"
                name= "description"
                onChange={handleChanges}
                value={project.description}
                
            />
            <label htmlFor="student_id">Student</label>
            <select
                id="student_id"
                name="student_id"
                onChange={handleChanges}
                value={project.student_id}
            >
                {students && students.map(item => 
                    <option key={item.id} value={item.id}>{item.name}</option>
                )}
            </select>
            </FormInfo>
            <Button type='submit'>Add Project</Button>
        </form>
    )
}

//export default ProjectForm;

export default connect((state) => { return {
    //props
    students: state.students
}},{
    //actionMakers
    postTo,
    putTo,
    deleteFrom,
})(ProjectForm);