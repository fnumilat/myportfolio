import '../App.css';
import nasa_photo_of_the_day_image from '../images/nasa-photo-of-the-day-photo.PNG';

function NasaPhotoOfTheDay() {
  return (
    <div>
      <div className="Project-title">
        <p>Nasa Astronomy Photo Of The Day</p>
      </div>
      <img src={nasa_photo_of_the_day_image} className="Project-photo"/>
      <div className="Project-description">
        <p>Nasa Astronomy Photo Of The Day is a React App that renders Nasa's astronomy photo of the day from its api.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/fnumilat/nasa-photo-of-the-day/tree/fnu-milat" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://fnu-milat-nasa-photo-of-the-day.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default NasaPhotoOfTheDay;
