import React from 'react';
import StudentForm from '../utils/EditStudent';
import Students from '../utils/Students';
import { postTo, putTo, deleteFrom } from '../store/actions';
import {connect} from "react-redux";

function StudentList ({students}) { // see ViewProject for comments on Redux state
    /*const [students, setStudents] = useState([]);
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
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
        
        
      <>
            <h1>My Students</h1>
            <Students students={students}/>
            <StudentForm />
            
      
        </>
    
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