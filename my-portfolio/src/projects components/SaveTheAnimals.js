import '../App.css';
import save_the_animals_image from '../images/save-the-animals-photo.PNG';

function SaveTheAnimals() {
  return (
    <div>
      <div className="Project-title">
        <p>KEY</p>
      </div>
      <img src={save_the_animals_image} className="Project-photo"/>
      <div className="Project-description">
        <p>KEY is a platform where rganizations that help to save animals can create compaigns and 
           those who are interested to support can refer to those compaigns and donate.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/save-the-animals-2/front-end" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://savetheanimals2.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default SaveTheAnimals;
