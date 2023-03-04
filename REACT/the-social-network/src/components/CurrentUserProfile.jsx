import { useState, useEffect} from "react";
import { getCurrentUserProfile } from "../lib/social-Library";
import "../views/views.css";

function CurrentUseProfil() {

const [profile, setProfile] = useState({firstname: "", lastname: "", email:""})

  async function displayCurrentUser() {
    const resultat = await getCurrentUserProfile();
    console.log(resultat)
    setProfile(resultat)
  }

  useEffect(() => { 
    displayCurrentUser()
  }, [] 
  );

  return (
    <div>
          <p className="profileClass">{profile.firstname} {profile.lastname}</p>
          {/* <p>{profile.email}</p> */}
          {/* <button onClick={displayCurrentUser}>AFFICHER</button> */}
    </div>
  );
}

export default CurrentUseProfil;
