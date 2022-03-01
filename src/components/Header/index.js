import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src="" alt="" />
            <div className="header__search">
                {/* search icon */}
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="header__right">

        </div>
    </div>
  )
}

export default Header 