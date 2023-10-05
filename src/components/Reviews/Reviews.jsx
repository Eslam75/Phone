import React, { useState } from 'react'
import './Reviews.css'

import { testmoniall } from '../data/Testmonial'



export default function Reviews() {
    const [select, setselect] = useState(0)

  return (
    <div className='Reviews'>
        <div className="containerTesmonial">
            <div className="testimonial">
                <img src={testmoniall[select].img} alt="" />
                <p>{testmoniall[select].para}</p>
            </div>
            <div className="bulelts">
      {testmoniall.map((slied,slideIndex)=>(
      
                    <div onClick={()=>setselect(slideIndex)} className='bullet' key={slideIndex}></div>

      
      ))}
        </div>
        </div>
    </div>
  )
}
