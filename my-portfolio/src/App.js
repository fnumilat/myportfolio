import './App.css';
import header_image from './images/header-photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Fnu Milat's Technical Portfolio!
        </p>
        <img src={header_image} className="App-header-photo"/>
      </header>
      <div className="About-section-header">
        <p>
          About Fnu Milat:
        </p>
      </div>
      <div className="About-section-paragraph">
        <p>
          Fnu Milat is a Full Stack Web Developer, graduated from Lambda School, 
          and also has earned his Associate of Applied Science in Business Administration from Remington College. 
          The web applications and programs that Fnu has been using in a day to day life have fascinated him by how much
          they are making life easier and the curiosity of how they all are being created is what has attracted him to take the new journey,
          and learn. Now Fnu is ready and excited to utilize the knowledge he has gained to build applications and programs that
          can bring more value to the world.
          </p>
      </div>
      <div className="Tech-skills-section-header">
        <p>
          Technical Skills:
        </p>
      </div>
      <div className="Tech-skills-section-skills">
        <p className="Tech-skill">Javascript</p>
        <p className="Tech-skill">HTML</p>
        <p className="Tech-skill">CSS</p>
        <p className="Tech-skill">LESS</p>
        <p className="Tech-skill">Responsive Design</p>
        <p className="Tech-skill">Git</p>
        <p className="Tech-skill">React.js</p>
        <p className="Tech-skill">Redux</p>
        <p className="Tech-skill">Automated Unit Testing</p>
        <p className="Tech-skill"> Integration Testing</p>
      </div>
    </div>
  );
}

export default App;
