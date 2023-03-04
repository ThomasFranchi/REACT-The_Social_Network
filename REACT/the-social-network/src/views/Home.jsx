import { useState, useEffect } from "react";
import  { isUserLoggedIn} from "../lib/social-Library";
import NavMenu from "../components/NavMenu";
import Sidebar from "../components/Sidebar";
import CreatePostForm from "../components/CreatePostForm"
import PostsList from "../components/PostsList";
import './views.css'


import Connect from './Connect'


function Home() {

  const [userLoggedIn] = useState(isUserLoggedIn);
  const [clickedPost, setClickedPost] = useState(false)


  // Création des éléments
  return (
    <div className="homeContainer">
      <NavMenu />
      {userLoggedIn && <Sidebar />}
      {userLoggedIn ? (
        <div className="homeBottomContainer">
           <h1 className="titleH1Home">Votre actualité</h1>
      <button onClick={(e) =>setClickedPost(!clickedPost)}>Créer un nouveau post</button>
      <div>{clickedPost && <CreatePostForm/> }</div>  
      {/* {createContent()} */}
      {/* <createContent addlike={addLiketoServer} contentPost={contentPost}/> */}
         <PostsList />
        </div>
      ) : (
        <Connect />
      )}
    </div>
  );
}

export default Home;



