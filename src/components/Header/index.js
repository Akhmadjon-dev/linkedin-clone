import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../assets/img/linkedin.png'
import "./header.css"
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="" />
            <div className="header__search">
                {/* search icon */}
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
        </div> 
        <div className="header__right">
             
        </div>
    </div>
  )
}

export default Header 