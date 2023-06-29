import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import './App.css';


class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'React' }
    ],
    current: ''
  };

  // Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    });
  };

  // Add Course
  addCourse = (e) => {
    e.preventDefault();
    const current = this.state.current;
    const courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses: courses,
      current: ''
    });
  };

  // Delete Course
  deleteCourse = (index) => {
    const courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses: courses
    });
  };

  // Edit Course
  editCourse = (index, value) => {
    const courses = this.state.courses;
    courses[index].name = value;
    this.setState({
      courses: courses
    });
  };

  render() {
    const { courses } = this.state;
    const CourseItems = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm
          current={this.state.current}
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
        />
        <ul>{CourseItems}</ul>
      </section>
    );
  }
}

export default App;
