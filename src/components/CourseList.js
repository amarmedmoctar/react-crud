import React, { Component } from 'react';
import './CourseList.css';

class CourseList extends Component {
  state = {
    isEdit: false
  };

  // Render Course item
  renderCourse = () => {
    return (
      <li className="course-item">
        <span>{this.props.details.name}</span>
        <button className="edit-button" onClick={this.toggleState}>
          Edit Course
        </button>
        <button
          className="delete-button"
          onClick={() => this.props.deleteCourse(this.props.index)}
        >
          Delete Course
        </button>
      </li>
    );
  };

  // Toggle State
  toggleState = () => {
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit
    }));
  };

  // Update Course Item
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  // Render Update Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(input) => (this.input = input)}
          defaultValue={this.props.details.name}
        />
        <button className="update-button">Update Course</button>
      </form>
    );
  };

  render() {
    const { isEdit } = this.state;
    return <React.Fragment>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</React.Fragment>;
  }
}

export default CourseList;
