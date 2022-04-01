import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useDataLayerValue } from './DataLayer';


function Sidebar() {
  const [{playlists},dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-attempts-clarify-lack-google-cast-support-13.png" width='830' height='350' alt="" />
    <SidebarOption Icon={HomeIcon} title="Home"/>
    <SidebarOption Icon={SearchIcon} title="Search"/>
    <SidebarOption Icon={LibraryAddIcon} title="Your Library"/>
    <br />
    <strong className='sidebar_title'>PLAYLIST</strong>
    <hr />
    {playlists?.items?.map(playlist => (
      <SidebarOption title={playlist.name} />
    ))}
    </div>
  )
}

export default Sidebar