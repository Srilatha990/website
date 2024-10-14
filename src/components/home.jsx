

import React from 'react'
import Hero from './hero';
import Services from './services';
import About from './about';
import Offers from './offers';
import Menu from './menu';
import Team from './team';
import Book from './book';
import Reviews from './reviews';
import Cart from './cart';

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <Services/>
      <About/>
      <Offers/>
      <Menu/>
      <Team/>
      <Book/>
      <Cart/>
      <Reviews/>
    </div>
  )
}

export default Home
