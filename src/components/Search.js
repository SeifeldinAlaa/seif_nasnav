import React, { Component } from 'react';


import SideBar from './SideBar'


import 'react-pro-sidebar/dist/css/styles.css';




class Search extends Component {



  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */ }
  }

  render() {
    return (
      <React.Fragment>

        <nav className="navbar navbar-light " >
          <div className="container-fluid">
            <form className="d-flex">
              <i className="fa fa-search icon" style={{ position: 'absolute', marginBottom: '10px', padding: '10px', minWidth: '40px', left: '15px' }}></i>
              <input className="form-control me-2" type="search" placeholder="      Search" rel="Search" style={{ width: '300px', borderRadius: '50px ' }}></input>

            </form>
          </div>

        </nav>
        <div >
          <img alt='adidas' src={`${process.env.PUBLIC_URL}/images/adidas.png`} style={{ height: '150px', width: '170px', position: 'relative', bottom: '90px', left: '800px' }} />
          <img alt='yeshtery_yellow' src={`${process.env.PUBLIC_URL}/images/yeshtery_yellow.PNG`} style={{ height: '50px', width: '130px', position: 'relative', bottom: '156px', left: '160px' }} />
          <SideBar items={this.props.items} />
          <ul className="nav justify-content-end" style={{ position: 'relative', bottom: '185px', right: "470px" }}>
            <li className="nav-item">
              <SideBar items={this.props.items} />

            </li>
            <li className="nav-item">
              <i style={{ fontSize: '20px', backgroundColor: 'yellow', borderRadius: '100%', position: 'relative', left: '48px', bottom: '19px', zIndex: '100' }}>{this.props.items.length} </i>

              {/* <CartList items={this.props.items} /> */}
            </li>

            <li>
              <span style={{ marginLeft: '15px', fontSize: '20px' }}>  <span style={{ position: 'relative', bottom: '6px', fontWeight: 'bold' }}><span>
                <img className='paperboat' alt='paper_boat' src={`${process.env.PUBLIC_URL}/images/paper_boat.png`} />
              </span> </span></span>
            </li>

            <li className="nav-item" >
              <i className="far fa-heart" style={{ marginLeft: '15px', fontSize: '20px' }}> <span style={{ fontWeight: 'bold' }}> Wishlist</span> </i>
            </li>
            <li className="nav-item" >
              <i className="far fa-user" style={{ marginLeft: '15px', fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}> Login</span>  </i>
            </li>


          </ul>

        </div>


      </React.Fragment>
    );
  }
}

export default Search;
