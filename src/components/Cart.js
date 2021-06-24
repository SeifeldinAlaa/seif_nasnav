import React from 'react';

import CartList from './CartList';

const Cart = (props) => {

    return (
        <React.Fragment>
            <h1 style={{ color: '#9400D3', position: 'relative' }}>My Cart</h1>
            <p style={{ position: 'relative', fontWeight: 'bold', top: '10px' }}>Cart Summary</p>
            <CartList items={props.items} />
            <h2 style={{ position: 'relative', fontWeight: 'bold' }}>Total: 19,999 LE</h2>
            < br />

            <button style={{ height: '60px', width: '165px', position: 'relative', backgroundColor: '#fdf300', borderRadius: '50px', fontWeight: 'bold' }}> Review Cart</button>

            <button style={{ height: '60px', width: '200px', position: 'relative', backgroundColor: '#9400D3', color: 'white', borderRadius: '50px', fontWeight: 'bold' }}>   Complete Checkout</button>

        </React.Fragment>
    )

}

export default Cart;




