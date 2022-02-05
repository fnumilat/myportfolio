import '../App.css';
import fourty_positive_quotes_image from '../images/fourty-positive-quotes-photo.PNG';

function FourtyPositiveQuotes() {
  return (
    <div>
      <div className="Project-title">
        <p>40 Positive Quotes</p>
      </div>
      <img src={fourty_positive_quotes_image} className="Project-photo"/>
      <div className="Project-description">
        <p>40 Positive Quotes is a React App that contains 40 quotes everyone needs to read in a daily basis to feel positive, optimistic,
          and energetic.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/fnumilat/40-positive-quotes" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://40-positive-quotes.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default FourtyPositiveQuotes;
