import React from 'react';
const Video_Player = ({video_id}) => {
    return ( <div><iframe id="ytplayer" type="text/html" width="640" height="360"
    src={`https://www.youtube.com/embed/${video_id}`}
    ></iframe></div> );
}
 
export default Video_Player;