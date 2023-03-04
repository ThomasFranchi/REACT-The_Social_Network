import { useState, useEffect } from "react";
import { getPosts } from "../lib/social-Library";
import Post from "./Post";



// Publier un Post
function PostList() {

    const [contentPost, setContentPost] = useState([]);


      // Hook d'effet pour actualiser la page avec les posts
  useEffect(() => {
    getPostFromServer();
}, []);


  // Récupérer les posts depuis le serveur
  async function getPostFromServer() {
    const result= await getPosts();
    setContentPost(result.posts);
    // setLikeNb(resultat.posts.likes.length);
  }

    return (
        <div>
            {contentPost.map((post) => (
                <Post {...post} />
            ))}
        </div>
    )
  };

/* {...post} donne ->
    <Post
        _id={post._id}
        title={post.title}
        content={post.content}
        firstname={post.firstname}
        lastname={post.lastname}
        date={post.date}
        likes={post.likes}
        comments={post.comments}
    />
*/

export default PostList;