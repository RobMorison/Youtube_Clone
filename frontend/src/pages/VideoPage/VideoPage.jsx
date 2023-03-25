import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import { DATA } from '../../localData';
import Video_Player from '../../components/VideoPlayer/Video_Player';
import CommentMapper from '../../components/CommentMapper/CommentMapper';
import CommentForm from '../../components/CommentForm/CommentForm';
import { useParams } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';


// get single video id
function VideoPage() {
    const [videos, setVideos] = useState('');
    const [comments, setComments] = useState([]);
    const { videoId } = useParams()
    const [video_id, setVideo_Id] = useState(videoId);
    const [user, token] = useAuth();

    // useParams to grab video id and send to the Video_Player component

    useEffect(() => {
        relatedVideo();
        GetComments()
    }, []);

    async function relatedVideo() {
        await axios
            .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyAaI70HaiwLTfH7OCLlYHIqBrDnILSfrvk`)
            .then(response => setVideos(response.data.items))
            .catch(error => console.error(error));
        console.log('related video', videos)
    }

    async function GetComments() {
        await axios
            .get(`http://127.0.0.1:8000/api/comments?video_id=${video_id}`)
            .then(response => (setComments(response.data)))
        console.log('pulled comments')
    }

    async function addNewComment(comment) {
        await axios
            .post(`http://127.0.0.1:8000/api/comments/post/${video_id}/`, comment,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
            .then(() => GetComments())
    }

    return (
        <>
            <SearchBar />
            <Video_Player video_id={video_id} related_video={relatedVideo}/>
            <CommentForm addNewCommentProperty={addNewComment} video_id={video_id}/>
            <CommentMapper comments={comments} />
            <RelatedVideos related_videos={relatedVideo}/>

        </>)

};

export default VideoPage;