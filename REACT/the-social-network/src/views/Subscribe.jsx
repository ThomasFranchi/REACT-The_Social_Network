import { register } from "../lib/social-Library"; // Import de la fonction register
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import './views.css'
import Input from "../components/input";



function Subscribe() {

    // const [lastName, setLastName] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");
    
    // function lastNameSet(value) {
    //     setLastName(value);
    //     console.log(lastName)
    // }
    
    // function firstNameSet(value) {
    //     setFirstName(value);
    //     console.log(firstName)
    // }
    
    // function emailSet(value) {
    //     setEmail(value);
    //     console.log(email)
    // }

    // function passSet(value) {
    //     setPass(value);
    //     console.log(email)
    // }
    
    const [user, setUser] = useState({lastname:"", firstname:"", email:"", password:""})
    const [successMsg, setSuccessMsg] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)


         function handleChange(e) {
        // 3 eme solution (suite ci-dessous)
        setUser({...user,[e.target.name]: e.target.value})
        // 1ere solution
        //   setUser({...user,...value})
          console.log(user);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // destructure
        const { lastname, firstname, email, password} = user
        const result = await register(lastname, firstname, email, password)

        // 2eme essai (suite en dessous)
        // const resultat = await register(user.lastname, user.firstname, user.email, user.password)
        console.log(result)

        if (!result.success) {
            setSuccessMsg(null);
            setErrorMsg(result.message);
            return;
        }
        setSuccessMsg("Votre compte a bien été créé !");
        setErrorMsg(result.message);
        return;
    }

    return(
        <div className="subscribeContainer">   
            <NavMenu />
            <p> Pour vous inscrire, <br/> veuillez renseigner vos informations personnelles </p> 
    
            <div className="formContainer">

                <form onSubmit={handleSubmit}>
                    
                    {/* 3ème essai - solution de guillame*/}
                    <Input label="Nom :" name="lastname" onChange={handleChange} value={user.lastname}/>
                    <Input label="Prénom :" name="firstname" onChange={handleChange} value={user.firstname}/>
                    <Input label="Email :" name="email" onChange={handleChange} value={user.email}/>
                    <Input label="Mot de Passe :" name="password" type="password" onChange={handleChange} value={user.password}/>


                    {/* 2ème essai */}
                    {/* <Input label="Nom :" name="lastname" onChange={ (e) => handleChange({lastname: e.target.value})} value={susbscribeForm.lastname}/>
                    <Input label="Prénom :" name="firstname" onChange={ (e) => handleChange({firstname: e.target.value})} value={susbscribeForm.firstname}/>
                    <Input label="Email :" name="email" onChange={ (e) => handleChange({email: e.target.value})} value={susbscribeForm.email}/>
                    <Input label="Mot de Passe :" name="password" type="password" onChange={ (e) => handleChange({password: e.target.value})} value={susbscribeForm.password}/> */}

                    {/* 1er essai */}
                    {/* <label htmlFor="">Nom :</label>
                    <input type="text" value={susbscribeForm.nom} onChange={ (e) => handleChange({nom: e.target.value})}  />
                    <label htmlFor="">Prénom :</label>
                    <input type="text" value={susbscribeForm.prenom}  onChange={ (e) => handleChange({prenom: e.target.value})}   />
                    <label htmlFor="">Email :</label>
                    <input type="email" value={susbscribeForm.email}  onChange={ (e) => handleChange({email: e.target.value})}   />
                    <label htmlFor="">Mot de passe :</label>
                    <input type="password" value={susbscribeForm.password}  onChange={ (e) => handleChange({password: e.target.value})}  /> */}

                    <button>S'inscrire</button>
                </form>
            </div>
            {errorMsg !== null && <p> "Une erreur s'est produite !" : {errorMsg}</p>}
            {successMsg !== null && <p>{successMsg}</p>}  
        </div>
     
    )
    };
    

export default Subscribe;


