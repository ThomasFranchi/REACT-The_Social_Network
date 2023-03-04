import { useState, } from "react";
import  {addLike, isUserLoggedIn} from "../lib/social-Library";
import CreateComment from "./CreateCommentForm";
import '../views/views.css'
import Comment from "./Comment";

function CreateContent({contentPost}) {



    // const [{contentPost}, setContentPost] = useState([]);
    const [userLoggedIn] = useState(isUserLoggedIn);
    const [clickedCommentForm, setClickedCommentForm] = useState(false)
    const [clickedPost, setClickedPost] = useState(false)
    const [clickedComment, setClickedComment] = useState(false)

    console.log("contentPost:", contentPost);

    return {contentPost}.map((el, index) => (
      <div className="postClass">
        <h3>{el.title}</h3>
        <p>{el.content}</p>
        <em>
          par {el.firstname} {el.lastname}{" "}
        </em>
        {/* Boutton like */}
        <p>nombre de like {el.likes.length}</p>
        <button onClick={(e) => {addlike(index)}}>Likez</button>

        {/* Boutton Commentez */}
        <button onClick={(e) => setClickedCommentForm(!clickedCommentForm)}>Commentez</button>
        {clickedCommentForm && <CreateComment commentvalue={el._id} />}

        <button onClick={(e) => setClickedComment(!clickedComment)}>commentaires : {el.comments.length} </button>

        {/* affichage des commentaire */}
        {clickedComment && (
          <div>
            {el.comments.map((el, index) => (
              <Comment index={index} firstname={el.firstname} lastname={el.lastname} userId={el.userId} />
            ))}
          </div>
        )}
      </div>
    ));
  };

  export default CreateContent;
