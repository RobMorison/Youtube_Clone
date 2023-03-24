import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';
import { DATA } from '../../localData';
import Video_Player from '../../components/VideoPlayer/Video_Player';
import VideoList from '../../components/VideoList/VideoList';

// handleClick function that sends the videoId to VideoPage using the "useNavigate"


function SearchPage(){
    const[videos, setVideos] = useState([]);
    console.log('search page', videos)

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos(){
   
        await axios
        .get('https://www.googleapis.com/youtube/v3/search?q=star+wars&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk&part=snippet&type=video&maxResults=5')
        .then(response => setVideos(response.data.items))
        .catch(error =>console.error(error));
        console.log('getvideo' , videos)        
    };


    return(
        <>
        <SearchBar/>
        <VideoList videos={videos}/>
        </>
    );
    };

export default SearchPage;