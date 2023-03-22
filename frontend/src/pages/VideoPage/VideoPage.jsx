import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import { DATA } from '../../localData';
import Video_Player from '../../components/VideoPlayer/Video_Player';
import CommentMapper from '../../components/CommentMapper/CommentMapper';
import CommentForm from '../../components/CommentForm/CommentForm';

// get single video id
function VideoPage() {
    const [videos, setVideos] = useState(DATA);
    const [comments, setComments] = useState([]);
    const [video_id, setVideo_Id] = useState('4cul91x5F1U');

    useEffect(() => {
        // relatedVideo();
        GetComments()
    }, []);

    async function relatedVideo() {
        await axios
            .get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=_F6YBwIPzmk&type=video&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk')
            .then(response => setVideos(response.data.items))
            .catch(error => console.error(error));
        console.log('related video', videos)
    }

    async function GetComments(){
        await axios
            .get(`http://127.0.0.1:8000/api/comments?video_id=${video_id}`)
            .then(response =>(setComments(response.data)))
        console.log('pulled comments')
    }

    return (
        <>
        <SearchBar/>      
        <Video_Player video_id = {video_id} />
        <CommentForm/> <button onClick = {()=> GetComments()}>Get Comments</button>
        <CommentMapper comments = {comments}/>

        </>)

};

export default VideoPage;