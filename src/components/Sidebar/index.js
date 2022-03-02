import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>
                    {topic}
                </p>
            </div>
        )
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491__340.jpg" alt="" />
            <Avatar className='sidebar__avatar' />
            <h2 className="sidebar__name">
                Akhmadjon Abdusamadov
            </h2>
            <h4 className="sidebar__website">
                Ahmadjon.uz
            </h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>
                    Who viewed your profile
                </p>
                <p className="sidebar__statNumber">
                    2,345
                </p>
            </div>
            <div className="sidebar__stat">
                <p>
                    Views on post
                </p>
                <p className="sidebar__statNumber">
                    2,945
                </p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('#javascript')}
            {recentItem('#react')}
            {recentItem('#developer')}
            {recentItem('#programming')}
            {recentItem('#design')}
        </div>
    </div>
  )
}

export default Sidebar