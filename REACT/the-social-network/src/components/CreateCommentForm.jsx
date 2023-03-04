import { useState } from "react";
import { addComment } from "../lib/social-Library";
import "../views/views.css";
import Textarea from "./Textarea";

function CreateComment({ commentvalue }) {
  const [comment, setComment] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  function handleValue(e) {
    setComment(e.target.value);
  }

  async function submitComment(e) {
    e.preventDefault();
    const result = await addComment(commentvalue, comment);
    console.log(commentvalue);

    if (!result.success) {
      setErrorMsg(result.message);
      return
    }
    setErrorMsg(null);
  }

  return (
    <div>
      <form className="formCreateComment" onSubmit={submitComment}>
        <div className="formCreateComment-left">
          <Textarea
            label="Votre commentaire"
            className="areaCreateComment"
            rows="3"
            cols="30"
            value={comment}
            onChange={handleValue}
          />
        </div>
        <button>Envoyer commentaire</button>
      </form>
      {errorMsg !== null && <p>Une erreur s'est produite : {errorMsg}</p>}
    </div>
  );
}

export default CreateComment;
