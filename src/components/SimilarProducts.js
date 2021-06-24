import React, { Component } from 'react';




class SimilarProducts extends Component {

    render() {
        return (
            <React.Fragment>
                <h3 style={{ color: '#9400D3', position: 'relative', left: '150px', fontWeight: 'bold' }}>Similar Products</h3>

                <p style={{ color: 'gray', position: 'relative', left: '150px' }}>You may like these products also</p>


                <div className='container'>
                    <div className='gallery'>
                        <img alt='firstproduct' src={`${process.env.PUBLIC_URL}/images/firstProduct.jpg`} />
                        <div className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                        <p style={{ position: 'relative', left: '23px', fontSize: '20px', color: '#9400D3' }}>9,999 LE</p>
                        <p style={{ position: 'relative', left: '23px', color: 'gray', display: 'inline' }}>9,999 LE </p>
                        <p style={{ display: 'inline', position: 'relative', left: ' 50px', backgroundColor: 'yellow' }}> 50%</p>
                        <img style={{ height: '100px', width: '100px', position: 'relative', left: '100px' }} alt='firstproduct' src={`${process.env.PUBLIC_URL}/images/adidas.png`} />
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="far fa-star" style={{ color: 'orange' }}></i>
                            <span style={{ display: 'inline', fontWeight: 'bold' }}>  4.2 of 5</span>
                        </div>
                        <p style={{ margin: '15px', textAlign: 'center' }}>Pickup From: Genena Mall</p>
                    </div>
                    <div className='gallery'>
                        <img alt='secondproduct' src={`${process.env.PUBLIC_URL}/images/secondProduct.jpg`} />
                        <div className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                        <p style={{ position: 'relative', left: '23px', fontSize: '20px', color: '#9400D3' }}>9,999 LE</p>


                        <img style={{ height: '100px', width: '100px', position: 'relative', left: '200px' }} alt='firstproduct' src={`${process.env.PUBLIC_URL}/images/adidas.png`} />
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="far fa-star" style={{ color: 'orange' }}></i>
                            <span style={{ display: 'inline', fontWeight: 'bold' }}>  4.2 of 5</span>
                        </div>
                        <span style={{ margin: '20px', position: 'relative', top: '14px' }}>From: UK</span > <span style={{ margin: '20px', position: 'relative', top: '14px' }}>To: Egypt</span> <span style={{ margin: '18px', position: 'relative', top: '14px' }}>in: 10</span>
                    </div>
                    <div className='gallery'>
                        <img alt='thirdproduct' src={`${process.env.PUBLIC_URL}/images/thirdProduct.jpg`} />
                        <div className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                        <p style={{ position: 'relative', left: '23px', fontSize: '20px', color: '#9400D3' }}>9,999 LE</p>
                        <p style={{ position: 'relative', left: '23px', color: 'gray', display: 'inline' }}>9,999 LE </p>
                        <p style={{ display: 'inline', position: 'relative', left: ' 50px', backgroundColor: 'yellow' }}> 30%</p>
                        <img style={{ height: '100px', width: '100px', position: 'relative', left: '100px' }} alt='firstproduct' src={`${process.env.PUBLIC_URL}/images/adidas.png`} />
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="far fa-star" style={{ color: 'orange' }}></i>
                            <span style={{ display: 'inline', fontWeight: 'bold' }}>  4.2 of 5</span>
                        </div>
                        <p style={{ margin: '15px', textAlign: 'center' }}>Pickup From: Genena Mall</p>
                    </div>
                    <div className='gallery'>
                        <img alt='fourthproduct' src={`${process.env.PUBLIC_URL}/images/fourthProduct.jpg`} />
                        <div className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                        <p style={{ position: 'relative', left: '23px', fontSize: '20px', color: '#9400D3' }}>9,999 LE</p>
                        <p style={{ position: 'relative', left: '23px', color: 'gray', display: 'inline' }}>9,999 LE </p>
                        <p style={{ display: 'inline', position: 'relative', left: ' 50px', backgroundColor: 'yellow' }}> 70%</p>
                        <img style={{ height: '100px', width: '100px', position: 'relative', left: '100px' }} alt='firstproduct' src={`${process.env.PUBLIC_URL}/images/adidas.png`} />
                        <div style={{ textAlign: 'center' }}>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="fas fa-star" style={{ color: 'orange' }}></i>
                            <i className="far fa-star" style={{ color: 'orange' }}></i>
                            <span style={{ display: 'inline', fontWeight: 'bold' }}>  4.2 of 5</span>
                        </div>
                        <span style={{ margin: '20px', position: 'relative', top: '14px' }}>From: Egypt</span > <span style={{ margin: '18px', position: 'relative', top: '14px' }}>To: Egypt</span> <span style={{ margin: '18px', position: 'relative', top: '14px' }}>in: 2 Days</span>
                        
                    </div>

    
                </div>

                <div className="progress" style={{height:'5px'}}>
  <div className="progress-bar"  style={{width:'70%', backgroundColor:'indigo'}} ></div>
</div>







            </React.Fragment>
        );
    }
}

export default SimilarProducts;



