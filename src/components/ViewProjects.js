import React, {useState, useEffect} from 'react';
import AddProject from '../utils/EditProject';
import Projects from '../utils/Projects';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {FormField, LoginForm} from './styled-components';


function ProjectList (pr) {
    const [trigger, setTrigger] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`students/${pr.match.params.id}/projects`)
        .then(response => {
            console.log('respone', response)
            setProjects(response.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })

    },[trigger])

    return( 

        <LoginForm>
            <FormField>
                <h1>My Projects</h1>
                <AddProject id={pr.match.params.id} trigger={trigger} setTrigger={setTrigger}
                setProjects={setProjects}
                />
                <Projects projects={projects}/>

            </FormField>
        </LoginForm>
    )
}

export default ProjectList