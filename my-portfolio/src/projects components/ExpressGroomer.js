import '../App.css';
import express_groomer_image from '../images/express-groomer-photo.PNG';

function ExpressGroomer() {
  return (
    <div>
      <div className="Project-title">
        <p>Express Groomer</p>
      </div>
      <img src={express_groomer_image} className="Project-photo"/>
      <div className="Project-description">
        <p>Express groomer connects groomers and clients. This allows for groomers to meet at the client's 
           residence or allows the clients to meet at the groomers. Clients will have the ability to safely schedule an 
           appointment and groomers can grow their business.
        </p>
      </div>
      <div className="Project-role">
        <p>Role: Back-End Developer</p>
      </div>
      <div className="Project-buttons">
        <a href="https://github.com/Lambda-School-Labs/LabsPT12-Express_Groomer-TeamD-BE" target="_blank"><button className="Project-button">See The Code</button></a>
        {/* <a href="https://main.d3jas6g6byv0f1.amplifyapp.com/" target="_blank"><button className="Project-button">See The Deployed Site</button></a> */}
      </div>
    </div>
  );
}

export default ExpressGroomer;
