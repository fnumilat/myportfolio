import './App.css';
import ListOfStudents from './projects components/ListOfStudents'
import ExpressGroomer from './projects components/ExpressGroomer'
import GameOfLife from './projects components/GameOfLife'
import NasaPhotoOfTheDay from './projects components/NasaPhotoOfTheDay'
import RickyMortyFanPage from './projects components/RickyMortyFanPage'
import SaveTheAnimals from './projects components/SaveTheAnimals'
import header_image from './images/header-photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header_image} className="App-header-photo"/>
        <p className="App-header-title">
          Welcome Fnu Milat's Technical Portfolio!
        </p>
      </header>
      {/* <div className="About-section-header">
        <p>About Fnu Milat:</p>
      </div> */}
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
        <p>Technical Skills:</p>
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
        <p className="Tech-skill">Integration Testing</p>
        <p className="Tech-skill">Debugging</p>
        <p className="Tech-skill"> Deployment</p>
        <p className="Tech-skill">Node.js</p>
        <p className="Tech-skill">RESTful APIs</p>
        <p className="Tech-skill">End-To-End Testing</p>
        <p className="Tech-skill">Express.js</p>
        <p className="Tech-skill">Relational Databases</p>
        <p className="Tech-skill">PostgreSQL</p>
        <p className="Tech-skill">SQLite Testing</p>
        <p className="Tech-skill">Authentication</p>
        <p className="Tech-skill">Python</p>
        <p className="Tech-skill"> Data Structures</p>
        <p className="Tech-skill">Algorithms</p>
        <p className="Tech-skill">Computer Architecture</p>
        <p className="Tech-skill"> Big-O Notation</p>
        <p className="Tech-skill">Graphs</p>
      </div>
      <div className="Projects-section-header">
        <p>Technical Projects:</p>
      </div>
      <div className="Project">
        <ListOfStudents />
      </div>
      <div className="Project">
        <ExpressGroomer />
      </div>
      <div className="Project">
        <GameOfLife />
      </div>
      <div className="Project">
        <NasaPhotoOfTheDay />
      </div>
      <div className="Project">
        <RickyMortyFanPage />
      </div>
      <div className="Project">
        <SaveTheAnimals />
      </div>
      <footer className="Main-Footer-Box">
        <div className="Platforms">
          <a href="https://twitter.com/fnumilat_webdev" target="_blank" class="fa fa-twitter"></a>
          <a href="https://www.linkedin.com/in/fnu-milat-93ab89186/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://www.instagram.com/fnumilat_webdev/" target="_blank" class="fa fa-instagram"></a>
          <a href="https://github.com/fnumilat" target="_blank" class="fa fa-github"></a>
        </div>
        <div className="Created-By-Text">
          <p>2020 | Fnu Milat</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
