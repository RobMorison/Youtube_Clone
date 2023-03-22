import React from 'react';
import Comment from '../Comment/Comment';
const CommentMapper = ({comments}) => {
    return (
        <ul>
            {comments.map(comment => <Comment comment={comment}/>)}
        </ul>
    )
      
}

export default CommentMapper;