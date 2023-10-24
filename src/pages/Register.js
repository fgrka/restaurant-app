import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import ReturnArrow from "../components/ReturnArrow"
import RegisterForm from "../components/RegisterForm";
import PageTransition from "../components/PageTransition";

function Register() {
    const navigate = useNavigate();
    const back = () => navigate("/Home"); 
    const login = "/Login";

    return(
        <PageTransition> 
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
        </PageTransition>
    )
}

export default Register;