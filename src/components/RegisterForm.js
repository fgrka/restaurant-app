import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"; 
import ErrorInfo from "./ErrorInfo";
import UserInfo from "./UserInfo";
import "./RegisterForm.css";
import check from "../assets/Check.svg";
import cross from "../assets/Close.svg";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [infoMessage, setInfoMessage] = useState("");
    const [checkNumbers, setCheckNumbers] = useState({color:"red", symbol: cross});
    const [checkLength, setCheckLength] = useState({color:"red", symbol: cross});
    const [checkSpecial, setCheckSpecial] = useState({color:"red", symbol: cross});

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

    
    function passwordCheck(e) {
        const value = e.target.value;
        const regNumber = /\d/;
        const specChar = /[\^$.|?*+(){}%^&\\]/;

        value.trim().length > 3 ? setCheckLength({color:"green", symbol: check}) : setCheckLength({color:"red", symbol: cross});  
        regNumber.test(value) ? setCheckNumbers({color:"green", symbol: check}) : setCheckNumbers({color:"red", symbol: cross}); 
        specChar.test(value)  ? setCheckSpecial({color:"green", symbol: check}) : setCheckSpecial({color:"red", symbol: cross}); 

    }


    return(
        <div className="register-form-container">
            <div className="register-form-inputs">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Wpisz e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Hasło</label>
                <input type="password" id="password" placeholder="Wpisz hasło" onChange={passwordCheck}/>
                <label htmlFor="password">Powtórz hasło</label>
                <input type="password" id="password-repeat" placeholder="Powtórz hasło" onChange={(e) => setPasswordRepeat(e.target.value)}/>
                <div className="register-error-container">
                <ErrorInfo errorMessage={errorMessage}></ErrorInfo>
                <UserInfo infoMessage={infoMessage}></UserInfo>
            </div>
            </div>
            <div className="regiser-password-check">
                <ul>
                    <li><span style={{color: checkLength.color}}><img src={checkLength.symbol} /></span> Hasło musi zawierać min. 8 znaków</li>
                    <li><span style={{color: checkNumbers.color}}><img src={checkNumbers.symbol} /></span> Hasło musi zawierać cyfrę</li>
                    <li><span style={{color: checkSpecial.color}}><img src={checkSpecial.symbol}/></span> Hasło musi zawierać znak specjalny</li>
                </ul>
            </div>    
            <div className="register-btn-container">
                <button className="button-filled" onClick={Register}>Utwórz konto</button>
            </div>
        </div>
    );
}

export default RegisterForm;