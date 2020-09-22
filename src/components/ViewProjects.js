import React, {useState, useEffect} from 'react';
import AddProject from '../utils/EditProject';
import Projects from '../utils/Projects';
import axiosWithAuth from '../utils/axiosWithAuth';
import {FormField, LoginForm} from './styled-components';
import { postTo } from '../store/actions';

function ProjectList ({projects}) { // props here are linked by connect() to the Redux store
    //const [trigger, setTrigger] = useState(false); // Redux state is global, so will automatically trigger re-renders where appropriate
    //const [projects, setProjects] = useState([]);
    const {id} = useParams();
    
    // instead of re-fetching this data every time ViewProjects mounts, we use Redux to fill `projects` once
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