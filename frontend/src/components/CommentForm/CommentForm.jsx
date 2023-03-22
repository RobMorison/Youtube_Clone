import React, { useState } from 'react';


const CommentForm = (props) => {
    
    const [text, setText] = useState();

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {

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
            </ul>
            <ul className= 'button'>
                <button type='submit'>Add Comment</button>
            </ul>
        </form>
     );
}
 
export default CommentForm;