import React from 'react'
import '../Navbar/card.css';
function Cards(prop) {
    return (

        <div className="card">

            <img src={prop.img} alt="heartemogi" />
            <span className='design'>{prop.des}</span>
            <span>{prop.softwares} <br />{prop.softwares2}</span>
            <button className='whitebtn '>Learn More</button>
        </div>




    )
}

export default Cards