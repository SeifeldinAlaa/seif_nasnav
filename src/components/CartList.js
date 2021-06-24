import React from 'react';

const CartList = (props) => {

    return (
        props.items.length > 0 ?
            <div style={{
                display: 'flex',
                flexDirection: 'column',

            }}>
                {props.items.map((item) => {
                    return (
                        <React.Fragment>
                            <div style={{ position: 'relative' }}>
                                <img alt='adidas' src={`${process.env.PUBLIC_URL}/images/${item.img}`} style={{ width: '60px', height: '90px' }}></img>
                                <span style={{ fontWeight: 'bold' }}>{item.name}</span>  <br /> <p style={{ position: 'relative', fontWeight: 'bold' }}>Quantitiy: 1</p><span style={{ fontWeight: 'bold', position: 'relative', color: '#9400D3' }}>{item.price}</span></div>
                        </React.Fragment>
                    )
                })}
            </div>
            : null
    )
}

export default CartList;




