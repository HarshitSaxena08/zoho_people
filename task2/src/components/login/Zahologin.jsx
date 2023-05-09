import { Carousel } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../login/Zahologin.css';
import Loginright from './loginright';


const Zahologin = () => {
  return (
    <>
      <div className='bigcontainer'>
        <div className="container col-xl-6">
          <div className='login col-sm'>
            <img src='../image/zaho logo.png' alt='logo' className='zohologo' />
            <div className='head'>
              <span>Sign in</span>
            </div>
            <p>to acess the People</p>
            <form /*onSubmit={handlesubmit}*/>
              <div className="form">

                <input type="text"
                  placeholder="Email address or mobile number"
                  // onChange={handleInput}
                  // required value={data.name}
                  id="name" name="name"
                />

              </div>
              <div className="form-nextbtn ">
                <button type="submit" className='col-md-4'>Next</button>
              </div>
              <br/>
              <div className='forgot'>
                <a href=" " >Forgot Password?</a>
              </div>

            </form>


            <hr />
            <div className='lowerside'>
              <span>Sign in using</span>
              <br />
              <div className='lower-icon'>
                <img className='icon' src="../image/google icon.png" href="#" />
                <img className='icon' src='../image/microsoft icon.png' href="#" />
                <img className='icon' src='../image/linkedin icon.png' href="#" />

              </div>
            </div>
          </div>



          <div className='rightbox col-xl-6'>
          <Loginright/>
          </div>

        </div>

        <div id="signuplink">
          Don't have a Zoho account? 
          
          <NavLink exact to="/Signup">
            <a>Sign Up Now</a>
          </NavLink>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Zahologin;