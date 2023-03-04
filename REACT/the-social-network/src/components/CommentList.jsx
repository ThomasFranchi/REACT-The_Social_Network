import "../views/views.css";
import Comment from "./Comment";

function CommentList({ comments }) {

return (

    <div className="commentClass">

      {comments.map((comment) => (
         <Comment {...comment} />
      ))}
    </div>
);
      };

export default CommentList;