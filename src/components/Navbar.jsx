import React from 'react'
import './navbar.css'
import logo from "../images/licious.svg"
const Navbar = () => {
  return (
    <>
    <div className='wrapper'>
        <div className='logo'>
<img src={logo} alt="logo" />
        </div>

        <div className='content'>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Products
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>

    </div>
    </>
  )
}

export default Navbar