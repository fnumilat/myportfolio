import './App.css';
import FourtyPositiveQuotes from './projects components/FourtyPositiveQuotes'
import ListOfStudents from './projects components/ListOfStudents'
import ExpressGroomer from './projects components/ExpressGroomer'
import GameOfLife from './projects components/GameOfLife'
import NasaPhotoOfTheDay from './projects components/NasaPhotoOfTheDay'
import RickyMortyFanPage from './projects components/RickyMortyFanPage'
import SaveTheAnimals from './projects components/SaveTheAnimals'
import header_first_image from './images/header-first-photo.jpg';
import header_second_image from './images/header-second-photo.jpg';
import header_third_image from './images/header-third-photo.jpg';
import header_fourth_image from './images/header-fourth-photo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header_first_image} className="App-header-photo"/>
        <p className="App-header-title">
          Welcome to Fnu Milat's Technical Portfolio!
        </p>
      </header>
      <div className="About-section-paragraph">
        <p>
        Fnu is a Full-Stack Engineer, graduated from Lambda School (which is now Bloom Institute of Technology). 
        He has earned his Associate of Applied Science in Business Administration from Remington College. 
        He has been always fascinated by the applications and programs that we use in a day to day life and the curiosity of 
        how those applications are being created attracted him to learn about the development process, 
        then he found his way through Lambda School (which is now Bloom Institute of Technology) and studied the Full-Stack Software Development. 
        He has gained skills and experience during his time at Lambda School and is excited to utilize them to build reliable and 
        performing applications and programs that can bring more value to the world.
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
        <p className="Tech-skill">Flexbox</p>
        <p className="Tech-skill">React JS</p>
        <p className="Tech-skill">React-Bootstrap</p>
        <p className="Tech-skill">Node JS</p>
        <p className="Tech-skill">RESTful APIs</p>
        <p className="Tech-skill">Express JS</p>
        <p className="Tech-skill">Relational Databases</p>
        <p className="Tech-skill">PostgreSQL</p>
        <p className="Tech-skill">SQLite</p>
        <p className="Tech-skill">Authentication</p>
        <p className="Tech-skill">Python</p>
        <p className="Tech-skill">Data Structures</p>
        <p className="Tech-skill">Algorithms</p>
        <p className="Tech-skill">Computer Architecture</p>
        <p className="Tech-skill">Big-O Notation</p>
        <p className="Tech-skill">Git</p>
        <p className="Tech-skill">GitHub</p>
        <p className="Tech-skill">Automated Unit Testing</p>
        <p className="Tech-skill">End-To End Testing</p>
        <p className="Tech-skill">Integration Testing</p>
        <p className="Tech-skill">Debugging</p>
        <p className="Tech-skill">Deployment</p>
        <p className="Tech-skill">Agile Scrum</p>
      </div>
      <div className="Projects-section-header">
        <p>Technical Projects:</p>
      </div>
      <div className="Project">
        <FourtyPositiveQuotes />
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
