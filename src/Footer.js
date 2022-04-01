import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { Slider } from '@mui/material';
import { Grid } from '@material-ui/core';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer_left">
          <img className="album_img" src="https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg" alt="" />
          <div className="footer_songinfo">
            <h4>Yeah!</h4>
            <p>Kaise hua</p>
          </div>
        </div>
        <div className="footer_center">
          <ShuffleIcon className='footer_green'/>
          <SkipPreviousIcon className='footer_icon'/>
          <PlayCircleFilledWhiteIcon className='footer_icon' fontSize='large'/>
          <SkipNextIcon className='footer_icon'/>
          <RepeatIcon className='footer_green'/>
        </div>
        <div className="footer_right">
         <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer