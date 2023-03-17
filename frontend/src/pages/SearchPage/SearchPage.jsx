import React, { useEffect, useState } from 'react';
import axios from 'axios'


function SearchPage(){
    const[search, setSearch] = useState(['state test']);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos(){
        console.log('state change function test')
        setSearch('function test')
        // const response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=star+wars&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk&part=snippet&type=video&maxResults=5');
        // setSearch(response)
        
    }

    return(
        <><div>{search}</div>
        </>
        // <><div><iframe id='ytplayer' type='text/html' title='search' width={640} height={360}
        // src={search} frameborder={0}>
        //     <SearchPage/>
        // </iframe></div></>
    );
};

export default SearchPage;