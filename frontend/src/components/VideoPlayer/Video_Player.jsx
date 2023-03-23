import React from 'react';
import SearchPage from '../../pages/SearchPage/SearchPage';
import VideoList from '../VideoList/VideoList';

const Video_Player = ({singleVideo}) => {
    
    console.log('video_player', singleVideo)
  
    
    return ( <div><iframe id="ytplayer" type="text/html" width="640" height="360"
    src={`https://www.youtube.com/embed/${singleVideo}`}
    ></iframe></div> );


}
 
export default Video_Player;