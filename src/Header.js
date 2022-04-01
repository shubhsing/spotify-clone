import React from 'react'
import "./Header.css"
import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from './DataLayer'


function Header() {

    const [{user},dispatch]=useDataLayerValue();
  return (
    <div className='header'>
        <div className="header_left">
            <Search/>
            <input placeholder='Search For artists,Songs and Albums' type="text" />
        </div>
        <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header