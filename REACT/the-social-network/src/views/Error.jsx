import { Link } from "react-router-dom"
import NavMenu from "../components/NavMenu"
import './views.css'

function Error() {
    return (
        <div className="errorContainer">
            <NavMenu />
            <p>	Cette page n'existe pas !</p>
        </div>
    )
};

export default Error;