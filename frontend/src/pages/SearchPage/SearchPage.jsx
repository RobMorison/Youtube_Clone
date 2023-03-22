import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';
import { DATA } from '../../localData';





function SearchPage(){
    const[search, setSearch] = useState(DATA);

    useEffect(() => {
        // getVideos();
    }, []);

    async function getVideos(){
   
        await axios
        .get('https://www.googleapis.com/youtube/v3/search?q=star+wars&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk&part=snippet&type=video&maxResults=5')
        .then(response => setSearch(response.data.items))
        .catch(error =>console.error(error));
        console.log('state change function test')        
    };

    return(
        <>
        <div><SearchBar/>
        <div>{search &&
            search.map((search) => {
                return <li key={search.id.videoId}>{search.snippet.thumbnails.default.url}
                {search.snippet.title}</li>;
            })}</div>
        </div>
        </>
    );
    };

export default SearchPage;