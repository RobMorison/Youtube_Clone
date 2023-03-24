import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const VideoList = ({videos}) => {

    console.log('video list', videos)
    // console.log(video_ids.id.video_Id)
    const navigate = useNavigate()

    // const handleClick = (video_ids) => {
    //     navigate(`/video/${videoId}`);
    // }

  
    
    return ( 
        <ul>
        
        {videos?.map((el) => (
            <Link key={el.id.videoId} to={`/video/${el.id.videoId}`}>
            <img src ={el.snippet.thumbnails.default.url}/>
            </Link>
        ))}</ul>
     );
}
 
export default VideoList;