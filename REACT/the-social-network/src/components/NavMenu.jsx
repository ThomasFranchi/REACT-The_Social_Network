import { Link } from "react-router-dom";
import logo from '../img/wa6ryyfa3g65voqi83r1p1628800513098.png'
import  "./NavMenu.css"
import Logout from "./Logout"
import { useState } from "react";
import { isUserLoggedIn } from "../lib/social-Library";



function NavMenu() {

    const [userLoggedIn] = useState(isUserLoggedIn)

    return (
        <nav className="NavMain">
    
                <img src={logo} alt="" className="logo" />
    
          
                <ul>
                    <li>
                        <Link to="/" className="link">Accueil</Link>
                    </li>
                    <li>
                    {!userLoggedIn &&  <Link to="/Sinscrire" className="link">S'inscrire</Link>}
                    </li>
                    <li>
                    {!userLoggedIn && <Link to="/Connexion" className="link">Se connecter </Link>}
                    </li>
                 

                </ul>
       
        </nav>
    )
};

export default NavMenu;