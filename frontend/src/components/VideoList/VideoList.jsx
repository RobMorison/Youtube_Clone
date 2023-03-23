import React from 'react';


const VideoList = ({video_ids}) => {

    console.log('video list', video_ids)

  
    
    return ( 
        <ul>
        {video_ids.map((el) => (
            <img src ={el.snippet.thumbnails.default.url}/>
        ))}</ul>
     );
}
 
export default VideoList;