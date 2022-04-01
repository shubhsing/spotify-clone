import React from 'react'
import "./Body.css"
import Header from './Header'
import SongRow from './SongRow'
import { useDataLayerValue } from './DataLayer'
import { FavoriteOutlined, MoreHoriz, PlayCircleFilledOutlined } from '@mui/icons-material';
function Body ({spotify}) {
  const [{discover_weekly,user},dispatch]=useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>
      <div className="body_info">
        <img src={user?.images[0]?.url} width="200" height="150" alt="" />
      <div className="body_infotext">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
      </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledOutlined className="body_shuffle"/>
          <FavoriteOutlined fontSize="large"/>
          <MoreHoriz/>
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body