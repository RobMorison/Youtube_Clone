import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchPage from '../SearchPage/SearchPage';
import { DATA } from '../../localData';


function VideoPage(){
    const[video, setVideo] = useState(DATA);

    useEffect(() => {
        // relatedVideo();
    }, []);

    async function relatedVideo(){
        await axios
        .get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=_F6YBwIPzmk&type=video&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk')
        .then(response => setVideo(response.data.items))
        .catch(error => console.error(error));
        console.log('related video', video)
    }

return(
<>
<div><iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/_F6YBwIPzmk"
  ></iframe></div>
<div>{video &&
            video.map((video) => {
                return <li key={video.id.videoId}>{video.snippet.title}</li>;
            })}</div>
  </>)

};

export default VideoPage;