import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"

const Sidebar = () => {
  const user = useSelector(selectUser)

  const recentItem = (topic) =>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">
        <p>{topic}</p>
      </span>
    </div>
  )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gpbK11FJyTgVDhjyzg_RmixXQteOocH2v5TKUdh8&s" alt="" />
          <Avatar src={user.photoUrl} className='sidebar__avatar'>
            {user.email[0].toUpperCase()}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2.232</p>
          </div>
          <div className="sidebar__stat">
            <p>View on Post</p>
            <p className="sidebar__statNumber">2.232</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('software engineering')}
          {recentItem('NextJS')}
          {recentItem('TailwindCSS')}
        </div>
    </div>
  )
}

export default Sidebar