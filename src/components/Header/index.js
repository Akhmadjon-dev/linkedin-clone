import React from "react";
import {
  SupervisorAccount,
  Home,
  Search,
  BusinessCenter,
  Chat,
  Notifications,
} from "@material-ui/icons";
import logo from "../../assets/img/linkedin.png";
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from 'react-redux';
import {auth} from '../../config/firebase'
import {logout} from '../../features/userSlice'
import "./header.css";


function Header() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
    auth.signOut()
  };

  return (
    <div className="header">
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
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions
          onClick={logoutHandler}
          avatar="https://ahmadjon.uz/images/Akhmadjon-Abdusamadov.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
