import { getUserProfile } from "../lib/social-Library"; // Import de la fonction register
import { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import "./views.css";
import Sidebar from "../components/Sidebar";

function SearchUser() {

// Variable 
const [userBase, setUserBase] = useState({});
const [userIdSearched, setUserIdSearched] = useState("");


  // fonction SOUMISSION Formulaire
  async function loadUserBase(e) {
    e.preventDefault()
    const resultat = await getUserProfile(userIdSearched);
    setUserBase(resultat)
  }

//  useEffect(() => { 
//   loadUserBase()
// }, [] 
// );

  return (
    <div className="updateUserContainer">
      <NavMenu />
      <Sidebar />
      <div className="homeBottomContainer">
   
          {/* Formulaire pour chercher l'USER par son ID*/}
          <form onClick={loadUserBase}>
            <label  htmlFor="">Identifiant de l'utilisateur recherché</label> <br/>
            <input
              type="text"
              value={userIdSearched}
              onChange={(e) => setUserIdSearched(e.target.value)}
            />
            <p>{userBase.firstname}</p>
            <p>{userBase.lastname}</p>
            <p>{userBase.email}</p>
            <p>{userBase.age}</p>
            <p>{userBase.occupation}</p>
            <button>Chercher</button>
          </form>
  
      </div>
    </div>
  );
}

export default SearchUser;
