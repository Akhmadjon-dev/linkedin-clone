import React from 'react'
import { SupervisorAccount, Home, Search } from '@material-ui/icons';
import logo from '../../assets/img/linkedin.png'
import HeaderOptions from './HeaderOptions';
import "./header.css"
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="" />
            <div className="header__search">
                {/* search icon */}
                <Search />
                <input type="text" placeholder="Search" />
            </div>
        </div> 
        <div className="header__right">
             <HeaderOptions Icon={Home} title="Home" />
             <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        </div>
    </div>
  )
}

export default Header 