import React, { Component } from 'react';

import Cart from './Cart';


class SideBar extends Component {

  render() {
    return (
      <React.Fragment>
        <button style={{
          width: '100px',
          position: 'relative',
          bottom: '9px',
          left: '20px',
          fontWeight: 'bold'
        }} className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Cart
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Cart items={this.props.items} />
          </div>
        </div>

      </React.Fragment>

    );
  }
}

export default SideBar;