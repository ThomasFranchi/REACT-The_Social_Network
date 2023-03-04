
import CurrentUseProfil from './CurrentUserProfile'
import Logout from "./Logout"
import { Link } from "react-router-dom";
import  "./Sidebar.css"

function Sidebar() {
    return (
        <nav className="sidebar">
         
                <ul>
                    <li>
                     <CurrentUseProfil />
                    </li>
                    <li>
                    <Logout />
                    </li>
                    <li>
                    <Link to="/Mettre-a-jour" className="link">Mettre à jour son profil</Link>
                    </li>
                    <li>
                    <Link to="/chercher-un-utilisateur" className="link">Chercher un utilisateur</Link>
                    </li>
                </ul>
       
        </nav>
    )
};

export default Sidebar;