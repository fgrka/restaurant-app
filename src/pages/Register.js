import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ReturnArrow from "../components/ReturnArrow"
import RegisterForm from "../components/RegisterForm";

function Register() {
    const navigate = useNavigate();
    const back = () => navigate("/Home"); 
    const login = "/Login";

    return(
    <div className="register">
         <ReturnArrow page={back}></ReturnArrow>
        <div className="register-title">
            <h2>Rejestracja</h2>
        </div>
        <RegisterForm></RegisterForm>
        <div className="register-info">
            <p>Masz już konto? <br /> <Link to={login}><strong>ZALOGUJ SIĘ</strong></Link></p>
        </div>
    </div>
    )
}

export default Register;