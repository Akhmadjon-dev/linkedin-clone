import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({name, description, photoUrl, message}) {
  return (
    <div className='post'>
        <Avatar />
        <div className="post__info">
            <h2>Akhmadjon Abdusamadov</h2>
            <p>Description</p>
        </div>
        <div className="post__body">
            <p>Message: Hey how are you?</p>
        </div>
    </div>
  )
}

export default Post