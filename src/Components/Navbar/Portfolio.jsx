import React from 'react'
import '../Navbar/portfolio.css';
import humble from "../images/humble.png";
import heart from "../images/heartemoji.png";
import glasses from "../images/glassesimoji.png";
import Cards from './Cards';
import { Card } from '@mui/material';

const Portfolio = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, aperiam.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <a  className="button buttons"  >Download CV</a>
      </div>
      {/* right side */}
      <div className="cards" id='first' style={{ left: "7rem", bottom: "7rem"}}>
        <Cards
          img={heart}
          
          des="Design"
          softwares="Figma , Sketch , Photoshop , Adobe "
        />
 <div style={{ top: "10rem", right:"17rem" }}>
        <Cards
          img={heart}

          des="Developer"
          softwares="Html , Css , JavaScript , python"
        />
        
      </div>
      <div style={{ top: "15rem", right:"2rem" }}>
        <Cards
          img={heart}
          des=" UI/UX"
          softwares="Lorem ipsum dolor sit amet consectetur   "
        />
        
      </div>

      </div>
     
    </div>


  )
}

export default Portfolio