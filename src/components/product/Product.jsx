import React, { useState } from 'react'
import './Product.css'
import iphone from './iphone.jpg'
import { featuers } from '../data/Features'
export default function Product() {

const [menu, setmenu] = useState(featuers)
const filter= (type)=>{
    setmenu(featuers.filter((x)=>
        x.type===type
    ))
}
  return (
    <div className='Product'>
        <div className="leftMenu">
            <ul>
                <li onClick={()=>setmenu(featuers)}>All phones</li>
                <li onClick={()=>filter("iphone")}>iphone</li>
                <li onClick={()=>filter("nokia")}>nokia</li>
                <li onClick={()=>filter("oppo")}>oppo</li>
            </ul>
        </div>
        <div className="rightSideProduct">
{
    menu.map((x,i)=>(
        <div className="card">
<img src={x.img} alt="" />
<div className="detailsMobile">
<p>{x.type}</p>
<p>{x.price}</p>
</div>
</div>
    ))
}
        </div>
    </div>
  )
}
