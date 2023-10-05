import { Link } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"
export default function Navbar() {
  const [navMobile, setnavMobile] = useState(false)
  return (
    
  <div className="Navbar">
    <div className="logo">
      <p></p>
    </div>
    <div className="listMenu">
      <ul>
        <li>Collection</li>
        <li>brands</li>
        <li>new</li>
        <li>sales</li>
        <li className="eng">ENG</li>

      </ul>
      <input type="text" placeholder="Search" />
      
      <div onClick={()=>setnavMobile(!navMobile)} className={"bars "+(navMobile&&"activeNav")}>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <p className="cartIcon">      <i class="fa-solid fa-cart-shopping"></i>
</p>
    </div>
  </div>
    
  )
}
