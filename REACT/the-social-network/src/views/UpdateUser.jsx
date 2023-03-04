import { updateCurrentUserProfile, getCurrentUserProfile } from "../lib/social-Library"; // Import de la fonction register
import { useEffect, useState } from "react";
import NavMenu from "../components/NavMenu";
import "./views.css";
import Sidebar from "../components/Sidebar";

function UpdateUser() {

// Variable d'état récuperer les informations de l'utilisateur connecté
  const [currentUserProfile, setCurrentUserProfile] = useState({})
  console.log("INFO CurrentUserProfile" , currentUserProfile)


// fonction afficher les informations de l'utilisateur connecté
  async function DisplayCurrentUserProfil() {
    const resultat = await getCurrentUserProfile();
    setCurrentUserProfile(resultat)
    console.log( "AFFICHE resultat" , resultat)
    console.log( "AFFICHE CurrentUserProfile" , currentUserProfile)
  }

// Variable d'état pour METTRE A JOUR les informations de l'utilisateur connecté
  // const [updateForm, setUpdateForm] = useState({})
  // console.log("INFO Update form" , updateForm)

  // fonction METTRE A JOUR les informations de l'utilisateur connecté
  function UpdateUserSet(value) {
    setCurrentUserProfile({ ...currentUserProfile, ...value });
}

// soumission du formulaire de mise à jour des informations de l'utilisateur.
  async function submitUpdateForm(e) {
    e.preventDefault();
    const resultat = await updateCurrentUserProfile(currentUserProfile.firstname, currentUserProfile.lastname,currentUserProfile.email, currentUserProfile.age, currentUserProfile.occupation);
    console.log(currentUserProfile)
  }

useEffect(() => { 
  DisplayCurrentUserProfil()
}, [] 
);

  return (
    <div className="updateUserContainer">
      <NavMenu />
      <Sidebar />
      <div className="homeBottomContainer">
   
          {/* Formulaire pour mettre à jour les informations utilisateurs et le renseignement de deux nouveaux Champs AGE et OCCUPATION */}
          <form onSubmit={submitUpdateForm}>
            <label htmlFor="">Prénom</label>
            <input
              type="text"
              value={currentUserProfile.firstname}
              onChange={(e) => UpdateUserSet({ firstname: e.target.value })}
            />
            <label htmlFor="">Nom </label>
            <input
              type="text"
              value={currentUserProfile.lastname}
              onChange={(e) => UpdateUserSet({ lastname: e.target.value })}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={currentUserProfile.email}
              onChange={(e) => UpdateUserSet({ email: e.target.value })}
            />
            <label htmlFor="">Age</label>
            <input
              type="number"
              value={currentUserProfile.age}
              onChange={(e) => UpdateUserSet({ age: e.target.value })}
            />
            <label htmlFor="">Activité</label>
            <input
              type="text"
              value={currentUserProfile.occupation}
              onChange={(e) => UpdateUserSet({ occupation: e.target.value })}
            />

            <button>Mettre à jour</button>
          </form>
  
      </div>
    </div>
  );
}

export default UpdateUser;
