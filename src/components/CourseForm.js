import React from 'react';
import './CourseForm.css';

const CourseForm = (props) => {
  return (
    <form onSubmit={props.addCourse} className="CourseForm">
      <input type="text" value={props.current} onChange={props.updateCourse} />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default CourseForm;
