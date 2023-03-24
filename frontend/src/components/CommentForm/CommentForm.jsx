import React, { useState } from 'react';


const CommentForm = (props) => {
    
    const [text, setText] = useState();

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {

            video_id: props.video_id,
            like: 0,
            dislikes: 0,
            text: text,

        };
        console.log(newComment);
        props.addNewCommentProperty(newComment)

    }
    return ( 
        <form onSubmit={handleSubmit}>
            <h5>Add New Comment</h5>
            <ul>
                <label>Comment</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
                <button className= 'button' type='submit'>Add Comment</button>
            </ul>
        </form>
     );
}
 
export default CommentForm;