import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RelatedVideos = ({related_videos}) => {

    console.log('related videos', related_videos)

    return(
       <ul>
        
        {related_videos?.map((el) => (
            <img src ={el.snippet.thumbnails.default.url}/>
        ))}</ul>
     );
}

export default RelatedVideos;