import { useState } from "react";
import CreateCommentForm from "./CreateCommentForm";
import CommentList from "./CommentList";
import { addLike } from "../lib/social-Library";


function Post({
    _id,    
  title,    
  content,    
  firstname,    
  lastname,    
  date,    
  likes, 
  comments 
}) {

    const [clickedCommentForm, setClickedCommentForm] = useState(false)
    const [clickedComment, setClickedComment] = useState(false)

  // incrémenter un Like
  async function addLiketoServer() {
    await addLike(_id);
      }

return (

    <div className="postClass">
        <h3>{title}</h3>
        <p>{content}</p>
        <em> par {firstname} {lastname} </em>
        {/* Boutton like */}
        <p>nombre de like {likes.length}</p>
        <button onClick={addLiketoServer}>Likez</button>

        {/* Boutton Commentez */}
        <button onClick={() => setClickedCommentForm(!clickedCommentForm)}>Commentez</button>

        {clickedCommentForm && <CreateCommentForm commentvalue={_id} />}
        
        <button onClick={() => setClickedComment(!clickedComment)}> commentaires : {comments.length} </button>
        {clickedComment &&  <CommentList comments={comments}/>}
        {/* affichage des commentaire */}

    
    </div>
        );
    }

export default Post;