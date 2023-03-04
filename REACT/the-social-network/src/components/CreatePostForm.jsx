import { useState } from "react";
import { createPost } from "../lib/social-Library";
import NavMenu from "./NavMenu";
import "../views/views.css";
import Input from "./input";
import Textarea from "./Textarea";

function CreatePost() {

    const [post, setPost] = useState({title: "", content: "" });
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null);
 

  function handleValue(e) {
    setPost({...post,[e.target.name]: e.target.value });
  }

  async function submitPost(e) {
    e.preventDefault();
    const {title, content} = post

    const result = await createPost(title, content);

    if (title === "" || content === "") {
      setErrorMsg(result.message);
      return;

    }

    if (!result.success) {
      setSuccessMsg(null);
      setErrorMsg(result.message);
      return;
    }
    setSuccessMsg("Votre post a été publié");
    setErrorMsg(null);

  
  }

  return (
   <div>
     <form className="formCreatePost" onSubmit={submitPost}>
        <div className="formCreatePost-left">
          <Input
            label="Titre du post"
            className="inputCreatePost"
            name="title"
            value={post.title}
            onChange={handleValue}
          />
          <br />
          <Textarea
            label="Titre du post"
            className="inputCreatePost"
            name="content"
            rows="10"
            cols="66"
            value={post.content}
            onChange={handleValue}
          />
          <br />
          
        </div>
        <button>Nouveau post</button>
      </form>
      {errorMsg !== null && <p> Une erreur s'est produit : {errorMsg}</p>}
      {successMsg !== null && <p> {successMsg}</p>}

   </div>

  );
}

export default CreatePost;