import React from 'react'
import './Compare.css'
import ReactCompareImage from 'react-compare-image';

import iphone from '../product/iphone 5.jpg'
import nokia from '../product/nokia.jpg'


export default function Compare() {
  return (
    <div className='Compare'>
      <h1>compare between past and present</h1>
        <div className="left">
            <div className="compareImg">
            <ReactCompareImage leftImage={nokia} rightImage={iphone} />;
            </div>

        </div>

    </div>
  )
}
