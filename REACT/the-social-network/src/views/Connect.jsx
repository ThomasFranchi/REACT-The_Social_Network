import { login } from "../lib/social-Library"; // Import de la fonction login
import { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Input from "../components/input";
import './views.css'

function Connect() {

// Variable d'état ID et MDP
    const [idNPass, setIdNPass] = useState({id: "", password: ""})
    const [errorMsg, setErrorMsg] = useState(null)
    const navigate = useNavigate();


// fonction récupérer les valeur des champs ID et MDP
    async function idNPassSet(e) {
        e.preventDefault();
        setIdNPass({...idNPass, [e.target.name]: e.target.value});
        console.log(idNPass);
    }

// fonction SOUMETTRE le formulaire
        async function submitLoginForm(e) {
            e.preventDefault();
            const {id, password} = idNPass;
            const result =  await login(id, password);
            console.log(result);
// condition, si result.success est faux alors afficher le msg d'erreur, sinon effacer le msg d'erreur et naviguer vers la page d'accueil.
            if (!result.success) {
                setErrorMsg(result.message)
                return;
            }

            setErrorMsg(null);
            navigate("/");

    }

    return(
        <div className="connectContainer">   
            <NavMenu />
           <p> Pour vous connecter,<br/> veuillez renseigner votre identifiant et votre mot de passe ci-dessous : </p> 

{/* Formulaire de CONNEXION */}
            <div className="formContainer">
                <form onSubmit={submitLoginForm}>
                    <Input label="Identifiant : " value={idNPass.id} name="id" onChange={idNPassSet} />
                    <Input label="Mot de passe : " type="password" value={idNPass.password} name="password" onChange={idNPassSet} />

                    {/* 1ere solution */}
                    {/* <label htmlFor="">Identifiant :</label>
                    <input type="text" value={idNPass.id} id="" name="id" onChange={ (e) => idNPassSet( {id: e.target.value})}  />
                    <label htmlFor="">Mot de passe :</label>
                    <input type="password" value={idNPass.pass} id=""  name="pass" onChange={ (e) => idNPassSet({pass: e.target.value})}  /> */}
                    <button>Se connecter</button>
                 </form>
           </div>
           {errorMsg !== null && <p> Une erreur s'est produite : {errorMsg} </p>}
        </div>
    )
};

export default Connect;