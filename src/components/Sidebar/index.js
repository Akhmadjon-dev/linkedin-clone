import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491__340.jpg"
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user?.email[0]}
        </Avatar>
        <h2 className="sidebar__name">{user.displayName}</h2>
        <h4 className="sidebar__website">{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,945</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("#javascript")}
        {recentItem("#react")}
        {recentItem("#developer")}
        {recentItem("#programming")}
        {recentItem("#design")}
      </div>
    </div>
  );
}

export default Sidebar;
