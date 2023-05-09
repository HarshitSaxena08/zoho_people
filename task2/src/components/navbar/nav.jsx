import React from 'react';
import '../navbar/nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='header '>
                <div className='brand-logo'>
                    <img src="../image/zaho logo.png" className='logo' alt='zoho logo' />
                </div>
                <div className="Menu">
                    <ul>
                        <li className='Payroll' > Payroll</li>
                        <li className='Recurit' > Recurit</li>
                        <li className='Expense' > Expense</li>
                        <li className='Mail' > Mail</li>
                        <li className='Project' > Project</li>
                        <li className='Survey' >Survey</li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Product
                            </a>
                        </li>
                    </ul>
                    
                </div>

                <div className='left-head'>
                    <img src='../image/search.png' alt='search image' className='left-head-logo' />
                    <img src='../image/world.png' alt='world img' className='left-head-logo '/>
                    <span>English  </span>
                    <NavLink exact to="/Zahologin">
                        <span className='sign-in'>SIGN IN</span>
                    </NavLink>
                    </div>


            </div>


            
        </>
    )
}

export default Nav;