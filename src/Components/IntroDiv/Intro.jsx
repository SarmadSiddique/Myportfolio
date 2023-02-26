import React from 'react'
import './intro.css'
import github from '../images/github.png';
import facebook from '../images/Facebook.png';
import insta from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import vector from '../images/Vector1.png';
import vector2 from '../images/Vector2.png';
import boy from '../images/boy.png';
import crown from '../images/crown.png'
import thumb from '../images/thumbup.png';
import glasses from '../images/glassesimoji.png'
import Floatingdiv from '../FloatingDiv/Floatingdiv';
import { borderRadius } from '@mui/system';
function Intro() {
  return (
    <>
      <section className="intro ">
        <div className="i_name">
          <span > Hy! I Am</span>
          <span >Sarmad Jutt </span>
          <span>Frontend developer with high level of experience in web designing and development, producing the quality work</span>
          <button className=' hire_btn'>Hire me</button>
          <div className="i_icons ">

            <img src={github} alt="" />
            <img src={linkedin} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
        <div className="i_img">
          <img src={vector} alt="" />
          <img src={vector2} alt="" />
          <img src={boy} alt="" />
          <img style={{ transform: 'scale(0.6) ', top: '-19%', left: '-19%', borderRadius: '50%' }} src={glasses} alt="" />
          <div style={{ top: '-9%', left: '65%' }}>
            <Floatingdiv img={crown} text1="Web" text2="Developer" />
          </div>
          <div style={{ bottom: '-12%' }} >

            <Floatingdiv img={thumb} text1="Best design" text2="Award" />
          
          </div>
          <div className="blur" style={{ background: "rgb(238 210 255)" }}>
            <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: ' 21rem', height: '11rem', left: '-16rem' }}></div>

          </div>
        </div>
     
      </section>
    </>
  )
}

export default Intro