import '../App.css';
import ricky_morty_image from '../images/ricky-morty-photo.PNG';

function RickyMortyFanPage() {
  return (
    <div>
      <div className="Project-title">
        <p>Rick & Morty Fan Page</p>
      </div>
      <img src={ricky_morty_image} className="Project-photo"/>
      <div className="Project-description">
        <p>Rick & Morty Fan Page is a React App that renders characters of Rick & Morty TV show from its api. The end user is being able to search for each character by its first/last name.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/fnumilat/Sprint-Challenge-Single-Page-Apps/tree/fnu-milat" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://rickyandmortyfanpage.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default RickyMortyFanPage;
