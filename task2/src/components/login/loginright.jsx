import React from 'react';
import "../login/loginright.css";

const Loginright = () => {
  return (
    <>
      <div className=''>

            jtyuu
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
           <div className="carousel-item active">
            <img src="../image/mfa_illustration2x.png" className="d-block w-50" alt="mfa_illustration2x.png" />
            harshit
          </div>
          <div className="carousel-item">
            <img src="../image/recovery_illustration2x.png" className="d-block " alt="recovery_illustration2x.png" />
            <div className="banner1_heading">Easy recovery modes</div>
            <div className="banner1_content">
              <span>Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily. </span>
            </div>
          </div> 
          <div className="carousel-item">
            <img src="../image/passwordless_illustration2x.png" className="d-block " alt="passwordless_illustration2x.png" />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Loginright;