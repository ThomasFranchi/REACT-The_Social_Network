import { isUserLoggedIn, logout } from "../lib/social-Library"; // Import de la fonction l
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import '../views/views.css'

function Logoutfunc() {
  
const navigate = useNavigate()

  async function test(e) {
    e.preventDefault();
    const resultat = await logout();
    console.log(resultat);
    navigate('/')
  }

  return (
    <button className="btnLogout" onClick={test}>
      {" "}
      Se déconnecter{" "}
    </button>
  );
}


export default Logoutfunc;