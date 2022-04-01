import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();
function App() {
  const [{user , token } ,dispatch]=useDataLayerValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({type:"SET_USER",user:user});
      });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists
        });

      }
      );
      spotify.getPlaylist('6ehdSiG3d2TinBXr1r7ZK0').then(response => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        });

      }
  );
    }
    console.log("I have a token", token);
    
  }, [])
  console.log(user);
  console.log(token);
  return (
    <div className="App">
      {
        token ? <Player/> : <Login/>
      }
      
    </div>
  );
}

export default App;
