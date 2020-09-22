import React, {useState, useEffect} from 'react';
import AddProject from '../utils/EditProject';
import Projects from '../utils/Projects';
import axiosWithAuth from '../utils/axiosWithAuth';
import {FormField, LoginForm} from './styled-components';
import { postTo } from '../store/actions';

function ProjectList ({projects}) { // props here are linked by connect() to the Redux store
    //const [trigger, setTrigger] = useState(false);
    //const [projects, setProjects] = useState([]);
    const {id} = useParams();
    
    /*useEffect(() => {
        axiosWithAuth().get(`students/${id}/projects`)
        .then(response => {
            console.log('respone', response)
            setProjects(response.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })

    },[trigger])*/

    return( 

        <LoginForm>
            <FormField>
                <h1>My Projects</h1>
                <AddProject id={id} postTo={postTo} />
                <Projects projects={projects}/>

            </FormField>
        </LoginForm>
    )
}

export default connect((state) => { return {
    //props
    projects: state.projects,
}},{
    //actionMakers
    postTo,
})(ProjectList);