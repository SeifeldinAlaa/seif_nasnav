import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';



class Nav extends Component {

  render() {
    return (
      <React.Fragment>

        <nav className="navbar navbar-dark  nav justify-content-end" style={{ backgroundColor: '#fdf300' }}>
          <p style={{ position: 'relative', right: '400px' }}><NavLink style={{ color: 'black' }} to='/'><i className="fas fa-chevron-left"></i></NavLink> Valentine's Day Offers! Buy Two Get One Free <NavLink style={{ color: 'black', fontWeight: 'bold' }} to='/'>Shop Now </NavLink> <NavLink style={{ color: 'black' }} to='/'><i className="fas fa-chevron-right"></i></NavLink></p>
          <span className="logo">
            <i className="fas fa-bars" style={{ position: 'relative', right: '70px' }}>  </i>
          </span>

          <ul className="nav justify-content-end ">

            <li className="nav-item">

              <NavLink className="nav-link " aria-current="page" to="/Contact" style={{ color: 'black' }}><i className="fal fa-phone-volume"></i> Contact Us</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Track" style={{ color: 'black' }}><i className="fal fa-shopping-cart 1f6d2" ></i> Track Order</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Store" style={{ color: 'black' }}><i className="fal fa-map-marker-alt" ></i> Find A Store</NavLink>
            </li>


          </ul>

        </nav>

      </React.Fragment>
    );
  }
}

export default Nav;