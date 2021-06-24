import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

class Links extends Component {

    render() {
        return (
            <React.Fragment>
                <div style={{ position: 'relative', bottom: '110px', left: '463px' }}>
                    <NavLink style={{ margin: '5px', color: 'black', fontWeight: 'bold' }} to="/Men" >Men</NavLink>
                /
                <NavLink style={{ margin: '5px', color: 'black', fontWeight: 'bold' }} to="/Clothing" >Clothing</NavLink>
                /
                <NavLink style={{ margin: '5px', color: 'black', fontWeight: 'bold' }} to="/Tops" >Tops</NavLink>
                /
                <NavLink style={{ margin: '5px', color: 'black', fontWeight: 'bold' }} to="/Adidas" >Adidas</NavLink>
                /
                <NavLink style={{ margin: '5px', color: 'black', textDecoration: 'none', fontWeight: 'bold' }} to="/AdidasBlack" >Adidas Black T-Shirt</NavLink>
                
                </div>
                <hr style={{position:'relative', bottom:'100px'}}/>
            </React.Fragment>
        );
    }
}

export default Links;