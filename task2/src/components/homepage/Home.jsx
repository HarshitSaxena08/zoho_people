import React from 'react';
import '../homepage/Home.css';
import Footer from '../footer/Footer';
import Nav from '../navbar/nav';
import SubNav from '../navbar/SubNav';
import {NavLink} from "react-router-dom";
import Facility from './facility';


const Home = () => {

    return (
    <>

        <main>
            <Nav/>
            <div className='"header'>
                <div className='content-wrap'>
                    <SubNav/>
                    <div className='head-para'>
                        <h1>
                        Deliver exceptional <br/>employee experiences
                        </h1>
                        <p>The world of work is changing rapidly and so should your HR practices.<br/>
                        Zoho People is a cloud-based HR software crafted to nurture employees, quickly adapt to changes, and make HR management agile and effective.<br/>
                        Simplify your HR operations, retain talent, and build a high-performing workforce while putting employee experience first.</p>

                    </div>
                    <div className='btn '>

                    <NavLink exact to="/signup">
                        <button id='btn1' >SIGN UP FOR FREE</button>
                    </NavLink>
                        <button id='btn2' >REQUEST FOR DEMO </button>
                    </div>


                </div>
            </div>
            <div className='peoples'>
                <ul>
                    <li><img src="../image/people1.png" className='people1'/></li>
                    <li><img src="../image/people2.png" className='people2'/></li>
                    <li><img src="../image/people3.png" className='people3'/></li>
                    <li><img src="../image/people4.png" className='people4'/></li>
                </ul>
            </div>
        </main>
        <Facility/>

        <Footer/>
    </>
  )
}

export default Home;