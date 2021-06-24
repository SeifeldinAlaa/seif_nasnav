import React, { Component } from 'react';
// import CartList from './CartList';

const blackAdidas = {
    img: 'Adidas_t-shirt.png',
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '9999 LE'
}

class AddToCart extends Component {
    render() {
        return (
            <React.Fragment>

                <div style={{ justifyContent: 'center', position: 'relative', bottom: '170px', display: 'flex', left: '170px' }}>



                    <button onClick={() => this.props.addItem(blackAdidas)} type="button" style={{ backgroundColor: '#9400D3', color: 'white', width: '12%', borderRadius: '50px', border: '0px' }}>Add To Cart</button>
                    <span style={{ margin: '5px' }}></span>

                    <h2 style={{ position: 'relative', bottom: '70px', right: '120px' }}>{this.props.count}</h2>

                    <span style={{ margin: '5px' }}></span>
                    <button onClick={this.props.reset} type="button" className="btn btn-secondary" style={{width:'70px'}}>Reset</button>
                    <br />

                    <span style={{ margin: '15px' }}></span>

                    <button type="button" style={{ backgroundColor: '#fdf300', color: 'black', width: '12%', borderRadius: '50px', border: '0px' }}>Pickup From Store</button>


                </div>

                {/* <CartList items={this.props.items} /> */}
            </React.Fragment>

        );
    }
}

export default AddToCart;




