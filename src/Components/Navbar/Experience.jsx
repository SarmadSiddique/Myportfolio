import React from 'react'
import '../Navbar/Experience.css'
import fiver from "../images/fiver-removebg-preview.png"
const Experience = () => {
  return (
    <div className="Experience">
      {/* left side */}
      <div className="awesome ex">
    <span>My Experience</span>
    <span>In Web Developement</span>
    <span>I have a good past in this field you can check my work and experience here
      <br />
      Check my Github profile to make yourself satisfied
    </span>
    <a  className="button buttons"  >See Profile</a>
  </div>
  {/* right side */}
  <div className="projects">
   <img className='fiver' src={fiver} alt="" />
  </div>
    </div>
  
  )
}

export default Experience