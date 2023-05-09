import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import '../signup/signup.css';
import { useState } from 'react';

const Signup = () => {

  const [data,setData]= useState({
    name:"",
    email:"",
    password:"",
    phone_number:""
  });
function handleInput(e){
  let name = e.target.name
  let value = e.target.value
  setData({...data , [name]:value})
}
const handleSubmit =(e)=>{
  e.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
fetch('http://localhost:5000/zohosignup', requestOptions)
    .then(response => response.json())
}

  return (
    <>
      <div className='container'>
        <div className='header-part'>
          <img className='logo' src='../image/zaho logo.png' alt='logo image' />

          <span className='item'> Have a Zaho Account?
            <NavLink exact to="/Zahologin">
              <a  className='harsh'>Sign In</a>
            </NavLink>
          </span>
        </div>
        <div>
          {/* --------------------------------------- */}
          <div className='junction'>
            <div className='signup-form'>
              <div className='people-head'>
                <img src='http://www.zohowebstatic.com/sites/zweb/images/producticon/people.svg' alt='people logo image' className='people-img' />
                <span> <strong>People</strong></span>
              </div>
              <h3>Start your 30-day free trial</h3>
              <form onSubmit={handleSubmit}>
                <div className="r-form">

                  <input type="text"
                    placeholder="Name*"
                    onChange={handleInput}
                    required value={data.name}
                    id="name" name="name"
                  />

                </div>
                <div className="r-form">

                  <input type="email"
                    placeholder="Email*"
                    onChange={handleInput}
                    required value={data.email}
                    id="email" name="email"
                  />

                </div>
                <div className="r-form">

                  <input type="password"
                    placeholder="Password*"
                    required value={data.password}
                    id="password" name="password"
                  onChange={handleInput}
                  />

                </div>
                <div className="r-form  d-flex">

                  <div className="r-form-number">+91</div>

                  <input type="text" placeholder="Phone Number*"
                     value={data.phone_number}
                    id="phone_number" name="number"
                    onChange={handleInput}

                    style={{ width: '85%' }}
                  />

                </div>
                <div className="check ">
                  <input type="checkbox" className="mb-4 pb-1 me-2" />
                  I agree to the <a href="#" >Terms of Service</a>
                  and <a href="#" > Privacy Policy.</a>
                </div>
                <br/>

                <div className="r-form-btn mb-4">
                  <button type="submit">FREE SIGN UP</button>
                </div>
              </form>

            </div>


            {/* this page is for testimonial */}


            <div className='testimonial'>
              <div className='yo'>
              <img src='../image/user1.jpg' alt='user' className='userimg' />
              <p>"Our employees all work from home, and they are able to check-in/
                check out instead of a time-card. We can just pull reports and
                 payday is much easier."
              </p>
               <br/> 
              <p className="customer">WENDY BALDWIN OF ER4 LOVE.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Signup;