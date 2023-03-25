import React from 'react';
import SearchPage from '../../pages/SearchPage/SearchPage';
import VideoList from '../VideoList/VideoList';
import { Link } from 'react-router-dom'

const Video_Player = ({ video_id }) => {

    console.log('video_player', video_id)


    return (<><div><iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${video_id}`}
    ></iframe></div></>);


}

export default Video_Player;