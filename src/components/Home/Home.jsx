import React from 'react'
import './Home.css'
import iphone from '../product/iphone 5.jpg'

import SliderHomeProducts from '../SliderHomeProducts/SliderHomeProducts'
import Compare from '../Compare/Compare'
import Product from '../product/Product'
import Reviews from '../Reviews/Reviews'
import Footer from '../footer/Footer'
import Skills from '../skills/skills'

export default function Home() {
  return (
    <div className='Home'>
<div className="containerHome">
  <div className="left">
    <h1>mobile app</h1>
    <h1>landing page</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus fugiat quod quasi sapiente similique consequuntur! Ad, nemo.</p>
    <div className="butnss">
      <button><span><i class="fa-brands fa-apple"></i></span>Download</button>
      <button> <span><i class="fa-brands fa-google-play"></i></span> Download</button>

    </div>
  </div>
  <div className="right">
    <img src={iphone} alt="" />
  </div>
</div>
    <Compare/>
    <Product/>
    <Reviews/>
    <Footer/>
    </div>
  )
}
