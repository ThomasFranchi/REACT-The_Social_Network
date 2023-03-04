function Comment({index, firstname, lastname, content, _Id}) {
  return (
    <div>
      <p>
        commentaire n° {index + 1} par {firstname} {lastname}{" "}
        {_Id}
      </p>
      <p> {content}</p>{" "}
    </div>
  );
}

export default Comment;
