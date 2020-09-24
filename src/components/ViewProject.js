import React, {useEffect, useState} from 'react';
import {FormInfo, Button, Input} from '../components/styled-components';
import { DATA_PROJECTS } from '../store/actions';
import { putTo } from '../store/actions';
import {connect} from "react-redux";
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const defaultValues = {
    project_name: "",
    description: "",
    due_date: "",
    student_id: 1,
}

const ViewProject = ({projects, putTo, students}) => {
    const {id} = useParams();
    const [project, setProject] = useState(defaultValues);
    const history = useHistory();

    const handleChanges = e => {
        setProject({...project, [e.target.name]: e.target.value})
        //console.log(project);
    };

    useEffect(() => {
        //console.log(id, projects)

        for(let i = 0; i < projects.length; i++){
            if(String(projects[i].id) === id){
                setProject(projects[i]);
                return;
            }
        }
    }, [projects, id])

    const submitForm = e => {
        e.preventDefault();

        putTo(DATA_PROJECTS, project, history, "/viewprojects");
        //history.push("/viewprojects");
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
            <Button type='submit'>Save Project</Button>
            <Link to="/viewprojects"><Button>Back to Projects</Button></Link>
        </form>
    )
}

//export default ProjectForm;

export default connect((state) => { return {
    //props
    projects: state.projects,
    students: state.students,
}},{
    //actionMakers
    putTo,
})(ViewProject);