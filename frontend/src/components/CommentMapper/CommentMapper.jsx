import React, { useState } from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const CommentMapper = ({comments}) => {

        
    
    return (
        <ul>
            {comments.map(comment => <Comment comment={comment}/>)}
        </ul>
    )
      
}

export default CommentMapper;