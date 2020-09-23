import React, {useState, useEffect} from 'react';
import AddProject from '../utils/EditProject';
import Projects from '../utils/Projects';
import axiosWithAuth from '../utils/axiosWithAuth';
import {FormField, LoginForm} from './styled-components';
import { postTo, putTo, deleteFrom, DATA_PROJECTS } from '../store/actions';
import { useParams } from 'react-router';
import {connect} from "react-redux";

function ProjectList ({projects, deleteFrom}) { // props here are linked by connect() to the Redux store
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

    const deleteProject = id => {
        deleteFrom(DATA_PROJECTS, id);
        
    }

    return( 

        <>
                <h1>My Projects</h1>
                <Projects projects={projects} deleteProject={deleteProject} />
                <AddProject id={id} />
                

           </>
    )
}

// connect() tells the Redux provider what state we want to access in each component
export default connect((state) => { return {
    //props - these are parts of the state object we want to access. They are shared among all components.
    // State is defined in `store/reducers/index.js` and includes projects, students, and reminders arrays
    projects: state.projects,
}},{
    //actionMakers - these are actions we can use that will affect state for all components.
    // Actions are defined in `store/actions/index.js` and include getInitialData, postTo, putTo, and deleteFrom that wrap their
    //   respective HTTP actions and put the results in state.
    postTo,
    putTo,
    deleteFrom,
})(ProjectList);