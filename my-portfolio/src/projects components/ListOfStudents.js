import '../App.css';
import list_of_students_image from '../images/list-of-students-photo.PNG';

function ListOfStudents() {
  return (
    <div>
      <div className="Project-title">
        <p>List of Students</p>
      </div>
      <img src={list_of_students_image} className="Project-photo"/>
      <div className="Project-description">
        <p>List of Students a React App that renders mock list of students from an external api. The end user is being able to search for a specific student using their first/last names.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/fnumilat/students" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://list-of-students.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default ListOfStudents;
