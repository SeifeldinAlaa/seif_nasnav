import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


class Nav2 extends Component {

  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: 'black', height: '40px', position: 'relative', bottom: '140px' }}>
          <ul className="nav justify-content-center" >
            <li className="nav-item" >
              <NavLink className="nav-link" aria-current="page" to="/Men" style={{ color: 'white' }}>Men</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Women" style={{ color: 'white', marginLeft: '50px' }}>Women</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Unisex" style={{ color: 'white', marginLeft: '50px' }}>Unisex</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Kids" style={{ color: 'white', marginLeft: '50px' }}>Kids</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Sellers" style={{ color: 'white', marginLeft: '50px' }}>Best Sellers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Arrivals" style={{ color: 'white', marginLeft: '50px' }}>New Arrivals</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/Offers" tabIndex="-1" aria-disabled="true" style={{ color: 'red', marginLeft: '50px' }}>Offers</NavLink>
            </li>
          </ul>
        </div>

      </React.Fragment>

    );
  }
}

export default Nav2;