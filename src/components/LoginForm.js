import { auth } from "../config/firebase-config"
import { useState } from "react"; 
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import ErrorInfo from "./ErrorInfo";
import "./LoginForm.css"

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const isAuthenticated = () => {
       auth().onAuthStateChanged( function(user) {
        if (user) return true;
        else return false;
       })
    }

    const Login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setErrorMessage(" ");
            if (isAuthenticated) navigate("/Menu");
        }
        catch (err) {
            let errorMsg = err.code;
            switch (errorMsg) {
            case "auth/invalid-email": 
                setErrorMessage("Wpisz poprawny e-mail");
                break;
            case "auth/missing-password": 
                setErrorMessage("Wpisz hasło");
                break;
            case "auth/invalid-login-credentials":
                setErrorMessage("Nieprawidłowe dane logowania"); 
            default:
                console.log(errorMsg);
            }
        }
    }
    

    return(
        <div className="login-form-container">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Wpisz e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Hasło</label>
                <input type="password" id="password" placeholder="Wpisz hasło" onChange={(e) => setPassword(e.target.value)}/>
            <div className="login-error-container">
                    <ErrorInfo errorMessage={errorMessage}></ErrorInfo>
            </div>
            <div className="login-btn-container">
                <button className="button-filled" onClick={Login}>Zaloguj się</button>
            </div>
        </div>
    )
}


export default LoginForm;