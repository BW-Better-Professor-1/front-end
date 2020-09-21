import React, {useState} from 'react';
import {axiosWithAuth} from './axiosWithAuth';
import {LoginForm, FormField, FormInfo, Button, Input} from '../components/styled-components';
import Projects from './Students';

const ProjectForm = pr => {

    const [project, setProject] = useState({
        title: "",
        notes: ""
    });

    const handleChanges = e => {
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project);
    };

    const submitForm = e => {
        e.preventDefault();
        const newProject ={
            student_id: pr.id,
            title: project.title,
            notes: project.notes
        }
        console.log(newProject)

        axiosWithAuth().post('/projects', newProject)
        .then(response => {
            console.log('New project added to student: ', response)
            pr.setTrigger(!pr.trigger)
            
        })
        setProject({title: "", notes: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <FormInfo>
            <label htmlFor='title'>Project Title</label>
            <Input
                id= "title"
                type="text"
                name= "title"
                onChange={handleChanges}
                value={project.title}
            />

            <label htmlFor='notes'>Project Details</label>
            <Input 
                id= "notes"
                type="text"
                name= "notes"
                onChange={handleChanges}
                value={project.notes}
            />
            </FormInfo>
            <Button type='submit'>Add Project</Button>
        </form>
    )
}

export default ProjectForm;