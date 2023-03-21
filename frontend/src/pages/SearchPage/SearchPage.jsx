import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';



function SearchPage(){
    const[search, setSearch] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos(){
   
        await axios
        .get('https://www.googleapis.com/youtube/v3/search?q=star+wars&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk&part=snippet&type=video&maxResults=5')
        .then(response => setSearch(response.data.items))
        .catch(error =>console.error(error));
        console.log('state change function test')
        // setSearch('function test')        
    };

    return(
        <>
        <div><SearchBar/></div>
        <div>{search[0]?.snippet.title}</div></>
    );
    };

export default SearchPage;