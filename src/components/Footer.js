import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Footer extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="footer">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col">
                                <img alt='yeshtery' src={`${process.env.PUBLIC_URL}/images/yeshtery_dark.PNG`} style={{ height: '100px', width: '200px', position: 'relative', top: '40px' }} />
                                <p style={{ position: 'relative', top: '70px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /> <br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.





                                </p>

                            </div>

                            <div className="col">
                                <div style={{ position: 'relative', left: '275px', top: '120px' }}>

                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '115px', right: '60px', textDecoration: 'none', color: 'white' }}>About Us</Link>
                                    <br />

                                    <Link to='/Contact' style={{ fontSize: '20px', position: 'relative', top: '125px', right: '60px', textDecoration: 'none', color: 'white', cursor: 'pointer' }}>Contact Us</Link>

                                    <br />
                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '135px', right: '60px', textDecoration: 'none', color: 'white' }}>Track Order</Link>
                                    <br />
                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '145px', right: '60px', textDecoration: 'none', color: 'white' }}>Terms & Conditions</Link>
                                    <br />
                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '155px', right: '60px', textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
                                    <br />
                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '165px', right: '60px', textDecoration: 'none', color: 'white' }}>Sell With Us</Link>
                                    <br />
                                    <Link to='/' style={{ fontSize: '20px', position: 'relative', top: '175px', right: '60px', textDecoration: 'none', color: 'white' }}>Shipping And Returns</Link>
                                </div>
                            </div>
                            <div
                                style={{ position: 'relative', left: '520px', bottom: '430px', fontSize: '25px' }}>
                                <p >Subscribe to our newsletter</p>
                            </div>


                        </div>
                        <div className='buttonInInput'>

                            <input placeholder='Enter Your Mail' />

                            <button style={{ fontWeight: 'bold' }}>Subscribe   <i className="fal fa-paper-plane" style={{ fontSize: '25px' }}></i></button>
                        </div>

                    </div>
                    <p style={{ position: 'relative', left: '500px', bottom: '200px' }}><img alt='facebook' style={{ height: '40px' }} src={`${process.env.PUBLIC_URL}/images/facebook.png`} /> /YESHTERY</p>
                    <p style={{ position: 'relative', left: '500px', bottom: '200px' }}><img alt='linkedin' style={{ height: '40px' }} src={`${process.env.PUBLIC_URL}/images/linkedin.jpg`} /> /YESHTERY</p>
                    <p style={{ position: 'relative', left: '500px', bottom: '200px' }}><img alt='instagram' style={{ height: '40px' }} src={`${process.env.PUBLIC_URL}/images/instagram.png`} /> /YESHTERY</p>
                    <p style={{ position: 'relative', left: '500px', bottom: '200px' }}><img alt='twitter' style={{ height: '40px' }} src={`${process.env.PUBLIC_URL}/images/twitter.png`} /> /YESHTERY</p>
                    <hr style={{ width: '100%', position: 'relative', left: '150px' }} />
                    <p style={{ position: 'relative', right: '600px', bottom: '1px' }}>© 2021 yeshtery. all rights reserved.</p>
                    <img alt='cash' src={`${process.env.PUBLIC_URL}/images/cash_on_delivery.jpg`} style={{ height: '80px', width: '120px', position: 'relative', bottom: '60px', left: '25px' }} />
                    <img alt='visa' src={`${process.env.PUBLIC_URL}/images/Visa.png`} style={{ height: '40px', width: '70px', position: 'relative', bottom: '60px', left: '45px', borderRadius: '5px' }} />
                    <img alt='master_card' src={`${process.env.PUBLIC_URL}/images/master_card.png`} style={{ height: '40px', width: '70px', position: 'relative', bottom: '60px', left: '65px', borderRadius: '5px' }} />
                    <img alt='nasnav' src={`${process.env.PUBLIC_URL}/images/nasnav_logo.png`} style={{ height: '40px', width: '110px', position: 'relative', bottom: '68px', left: '610px', borderRadius: '5px' }} />
                    <div style={{ height: '40px', width: '70px', position: 'relative', bottom: '120px', left: '1450px', fontFamily: 'Space Grotesk', fontSize: '20px' }} >Powered_By </div>

                </div>

                {/* <div style={{ borderLeft: '2px solid #696969', position: 'relative', left: '740px', top: '150px', height: '350px' }}></div>
                <div style={{ borderLeft: '2px solid #696969', position: 'relative', left: '1190px', bottom: '200px', height: '350px' }}></div> */}
                <div style={{ borderLeft: '2px solid gray', position: 'relative', left: '690px', height: '560px', bottom: '800px' }}>
                    <p > </p>
                </div>
                <div>
                    <p style={{ borderLeft: '2px solid gray', position: 'relative', left: '1150px', height: '495px', bottom: '1300px' }}> </p>
                </div>


            </React.Fragment>
        );
    }
}

export default Footer;