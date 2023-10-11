import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"; 
import ErrorInfo from "./ErrorInfo";
import UserInfo from "./UserInfo";
import "./RegisterForm.css";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [infoMessage, setInfoMessage] = useState("");

    const Register = async () => {
        try {
            if (password !== passwordRepeat) {
                throw (new Error("different-passwords"));
            }
            await createUserWithEmailAndPassword(auth, email, password);
            setErrorMessage(" ");  

            setInfoMessage("Utworzono konto! Możesz się zalogować.")
        }
        catch (err) {
            let errorMsg;
            (err.code) ? errorMsg = err.code : errorMsg = err.message;
            setInfoMessage(" ");
            
            switch (errorMsg) {
            case "auth/invalid-email": 
                setErrorMessage("Wpisz poprawny e-mail");
                break;
            case "auth/email-already-in-use": 
                setErrorMessage("Konto dla adresu e-mail już istnieje");
                break;
            case "auth/missing-password": 
                setErrorMessage("Wpisz hasło");
                break;
            case "auth/weak-password": 
                setErrorMessage("Hasło jest zbyt słabe (minimum 6 znaków)");
                break;
            case "different-passwords": 
                setErrorMessage("Hasła powinny być identyczne");
                break;
            default:
                console.log(errorMsg);
            }        
        }
    }

    return(
        <div className="register-form-container">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Wpisz e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Hasło</label>
                <input type="password" id="password" placeholder="Wpisz hasło" onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="password">Powtórz hasło</label>
                <input type="password" id="password-repeat" placeholder="Powtórz hasło" onChange={(e) => setPasswordRepeat(e.target.value)}/>
            <div className="register-error-container">
                <ErrorInfo errorMessage={errorMessage}></ErrorInfo>
                <UserInfo infoMessage={infoMessage}></UserInfo>
                </div>
            <div className="register-btn-container">
                <button className="button-filled" onClick={Register}>Utwórz konto</button>
            </div>
        </div>
    );
}

export default RegisterForm;