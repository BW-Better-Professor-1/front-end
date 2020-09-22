import React from 'react';
import {Link} from 'react-router-dom';

const Students = props => {
    return (
      <div className="student-list">
        {props.students.map(student => (
          <Link to={`/projectlist/${student.studentId}`}>
          <div className="student" key={student.studentId}>
            <h2>{student.name}</h2>
            <p>{student.email}</p>
          </div>
          </Link>
        ))}
      </div>
    );
  };

export default Students;