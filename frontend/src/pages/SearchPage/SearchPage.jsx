import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SearchBar from '../../components/SearchBar/SearchBar';


function SearchPage(){
    const[search, setSearch] = useState(['']);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos(){
    //     const options = {
    //         method:'GET',
    //         url: 'https://www.googleapis.com/youtube/v3/search?q=football',
    //         headers: {
    //             key: 'AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk'
    //         }
    //     };

    //     axios.request(options).then(function (response){
    //         console.log('response from fetch: ', response.data.results);
    //     }).catch(function(error){
    //         console.error(error);
    //     });
        // const response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=football&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk&part');
        console.log('state change function test')
        setSearch('function test')

        // setSearch(response)
        
    };

    return(
        <>
        <div><SearchBar/></div>
        <div>{search}</div>
        </>
        // <><div><iframe id='ytplayer' type='text/html' title='search' width={640} height={360}
        // src={search} frameborder={0}>
        //     <SearchPage/>
        // </iframe></div></>
    );
    };

export default SearchPage;