const Comment = ({comment}) => {
    return ( 
        <><li>
            {comment.user_id}
        </li><li>
                {comment.text}
            </li></>    

        );
}
 
export default Comment;
