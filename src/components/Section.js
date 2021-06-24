import React, { Component } from 'react';




class Section extends Component {

    render() {
        return (

            <React.Fragment>
                <div style={{ textAlign: 'center' }}>
                    <img alt='t-shirt' src={`${process.env.PUBLIC_URL}/images/Adidas_t-shirt.png`} style={{ height: '370px', width: '320px', position: 'relative', bottom: '66px', right: '180px' }} />

                    <img alt='t-shirt' src={`${process.env.PUBLIC_URL}/images/adidas.png`} style={{ height: '140px', width: '140px', position: 'relative', bottom: '166px', right: '160px' }} />
                    <p style={{ position: 'relative', bottom: '250px', left: '70px' }}>Adidas black t-shirt lorem ipsum dolor sit <br />amet, consectetuer adipiscing elit. </p>
                    <br />
                    <p style={{ position: 'relative', bottom: '290px', right: '40px', color: 'gray' }}>Men</p>
                    <span style={{ position: 'relative', bottom: '300px', left: '50px' }}>
                        <i className="fas fa-star" style={{ color: 'orange' }}></i>
                        <i className="fas fa-star" style={{ color: 'orange' }}></i>
                        <i className="fas fa-star" style={{ color: 'orange' }}></i>
                        <i className="fas fa-star" style={{ color: 'orange' }}></i>
                        <i className="far fa-star" style={{ color: 'orange' }}></i> <span style={{ fontWeight: 'bold' }}>4.9 of 5</span>   <span style={{ fontWeight: 'bold', color: 'gray' }}>22 Rates</span>

                    </span>
                    <p style={{ position: 'relative', bottom: '280px', right: '25px', color: 'purple', fontWeight: 'bold' }}>9,999 LE</p> <span style={{ position: 'relative', bottom: '320px', left: '55px', color: 'gray', fontWeight: 'bold' }}>9,999 LE</span>
                    <div style={{ backgroundColor: 'yellow', width: '4%', position: 'relative', left: '1100px', bottom: '345px', borderRadius: '5px' }}>30% Off</div>
                    <hr style={{ position: 'relative', bottom: '350px', width: '970px', float: 'right' }} />
                    <span style={{ fontWeight: 'bold', position: 'relative', bottom: '320px', left: '460px' }}>Size</span>
                    <div style={{ position: 'relative', bottom: '280px', left: '660px' }}>
                        <span style={{ color: 'purple', border: ' 1px solid gray', borderRadius: '50%', padding: '10px', margin: '10px' }}>  Small</span>

                        <span style={{ color: 'purple', border: ' 1px solid gray', borderRadius: '50%', padding: '10px', margin: '10px' }}>  Medium </span>

                        <span style={{ color: 'purple', border: ' 1px solid gray', borderRadius: '50%', padding: '10px', margin: '10px' }}>  Large</span>

                        <span style={{ color: 'purple', border: ' 1px solid gray', borderRadius: '50%', padding: '10px', margin: '10px' }}>  X Large</span>

                        <span style={{ color: 'purple', border: ' 1px solid gray', borderRadius: '50%', padding: '10px', margin: '10px' }}>  XX Large</span>

                    </div>
                    <hr style={{ position: 'relative', bottom: '250px', width: '970px', float: 'right' }} />
                    <p style={{ position: 'relative', bottom: '250px', width: '970px', float: 'right', right: '430px', fontWeight: 'bold' }} >Color</p>
                    <img alt='adidas black' src={`${process.env.PUBLIC_URL}/images/adidas_black.png`} style={{ height: '100px', width: '100px', position: 'relative', bottom: '180px', left: '640px', borderRadius: '50%' }} />

                    <img alt='adidas red' src={`${process.env.PUBLIC_URL}/images/red adidas.jpg`} style={{ height: '100px', width: '100px', position: 'relative', bottom: '180px', left: '420px', borderRadius: '50%' }} />
                    <hr style={{ position: 'relative', bottom: '160px', width: '970px', float: 'right' }} />
                    <p style={{ position: 'relative', bottom: '120px', width: '970px', left: '475px', fontWeight: 'bold' }} >Quantitiy</p>

                    <img alt='black t-shirt2' src={`${process.env.PUBLIC_URL}/images/adidas_black_side.jpeg`} style={{ height: '110px', width: '110px', position: 'relative', bottom: '480px', right: '250px' }} />
                    <img alt='black t-shirt' src={`${process.env.PUBLIC_URL}/images/black_t-shirt.jpg`} style={{ height: '110px', width: '110px', position: 'relative', bottom: '480px', right: '250px' }} />
                    <img alt='adidasblack2' src={`${process.env.PUBLIC_URL}/images/adidas_black_back.png`} style={{ height: '110px', width: '110px', position: 'relative', bottom: '480px', right: '250px' }} />






                </div>
            </React.Fragment>
        );
    }
}

export default Section;