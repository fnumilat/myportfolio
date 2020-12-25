import '../App.css';
import game_of_life_image from '../images/game-of-life-photo.PNG';

function GameOfLife() {
  return (
    <div>
      <div className="Project-title">
        <p>Conway's Game Of Life</p>
      </div>
      <img src={game_of_life_image} className="Project-photo"/>
      <div className="Project-description">
        <p>Conway's Game Of Life is an application in which users will be able to run different "Game of Life" scenarios.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Front-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/fnumilat/Conway-s-Game-of-Life" target="_blank"><button className="Project-button">See The Code</button></a>
        <a href="https://fnu-milat-game-of-life.netlify.app/" target="_blank"><button className="Project-button">See The Deployed Site</button></a>
      </div>
    </div>
  );
}

export default GameOfLife;
