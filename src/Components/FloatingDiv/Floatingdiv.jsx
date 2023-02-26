import React from 'react'
import './Floating.css';

function Floatingdiv(props) {

  return (
    <>
      <div className="floating">
        <img src={props.img} alt="" />
        <span>
          {props.text1} <br />{props.text2}
        </span>
      </div>
    </>
  )
}

export default Floatingdiv