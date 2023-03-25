import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RelatedVideos = ({related_video}) => {

    console.log('related videos', related_video)

    return(
       <ul>
        
        {related_video?.map((el) => (
            <img src ={el.snippet.thumbnails.default.url}/>
        ))}</ul>
     );
}

export default RelatedVideos;