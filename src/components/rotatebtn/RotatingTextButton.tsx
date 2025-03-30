import React from 'react';
import 'animate.css';
import './rotatebtn-style.css'

const RotatingTextButton = () => {
  return (
    <div className="position-relative  d-flex justify-content-center align-items-center rotate_btn_size" style={{ width: '150px', height: '150px' }}>
      {/* Rotating text container */}
      <div className="position-absolute btn_revolve w-100 h-100 animate__animated animate__infinite animate__slower animate__rotating">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fill="#ffffff" fontSize="7.5">
            <textPath xlinkHref="#circle" startOffset="0%">
              EXPLORE MORE • &nbsp; EXPLORE MORE • &nbsp; EXPLORE MORE • &nbsp; EXPLORE MORE •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center button */}
      <button
        className="carousel-control  position-relative"
        
      >
        <i className="fa-solid fa-arrow-right control-icon"></i>
      </button>
      
    </div>
  );
};



export default RotatingTextButton;