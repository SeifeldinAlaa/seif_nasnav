import React, { Component } from 'react'


import Nav from './Nav'





import Nav2 from './Nav2'



import Search from './Search'

import Footer from './Footer'


import Links from './Links'

import AddToCart from './AddToCart'

import Section from './Section'

import SimilarProducts from './SimilarProducts'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      items: [],
    }

  }

  addItem = (item) => {
    const items = this.state.items
    items.push(item)
    this.setState({ items })
    this.increment()
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  reset = () => {
    this.setState({ count: 0, items: [] })
  }

  render() {


    return (

      <React.Fragment>
        <Nav />
        <Search onMenuToggle={this.toggleMenu} items={this.state.items} />

        <Nav2 />

        <Links />




        <Section />



        <AddToCart
          count={this.state.count}
          items={this.state.items}
          reset={this.reset}
          addItem={this.addItem}
        />

        <SimilarProducts />
        <br />
        <br />


        <Footer />
        {/* <Switch>
          <Route path='/Contact' component={Contact} />
          <Route path='/Store' component={Store} />
          <Route path='/Track' component={Track} />
          <Route path='/Men' component={Men} />
          <Route path='/Women' component={Women} />
          <Route path='/Unisex' component={Unisex} />
          
          <Route path='/Sellers' component={Sellers} />
          <Route path='/Arrivals' component={Arrivals} />
          <Route path='/Offers' component={Offers} />
          <Route path='/Clothing' component={Clothing} />
          <Route path='/Tops' component={Tops} />
          <Route path='/Adidas' component={Adidas} />
          <Route path='/AdidasBlack' component={AdidasBlack} />


        </Switch> */}

      </React.Fragment>
    );
  }

}


export default App;
