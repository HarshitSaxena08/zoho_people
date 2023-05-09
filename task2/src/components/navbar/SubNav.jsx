import React from 'react';
import './SubNav.css';
const SubNav = () => {
  return (
    <>
      <div className='sub-header '>
        <div className='protecons-logo'>
          <img src='../image/protecon logo.png' />
          <h4 className='ha'>Protecons</h4>
        </div>
        <div className="sub-menu">
          <ul>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Features
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </a>
            </li>
            <li className='Recurit' > Pricing</li>
            <li className='Expense' > Customers</li>


            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
            </li>
          </ul>

        </div>
      </div>
    </>
  )
}

export default SubNav;