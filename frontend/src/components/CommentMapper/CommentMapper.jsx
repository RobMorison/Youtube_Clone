import React, { useState } from 'react';
import Comment from '../Comment/Comment';


const CommentMapper = ({comments}) => {

        
    
    return (
        <ul>
            <li>
            {comments.user_id}
            {comments.map(comment => <Comment comment={comment}/>)}
            </li>
        </ul>
    )
      
}

export default CommentMapper;