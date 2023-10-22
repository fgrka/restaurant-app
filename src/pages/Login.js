import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import ReturnArrow from "../components/ReturnArrow";
import google from "../assets/facebook.png";
import gmail from "../assets/google.png";
import apple from "../assets/apple.png"
import LoginForm from "../components/LoginForm";

function Login() {
    const navigate = useNavigate();
    const home = () => navigate("/Home");
    const register = "/Register";
      
     return(
    <div className="login">
        <ReturnArrow page={home}></ReturnArrow>
        <div className="login-title">
            <h2>Zaloguj się</h2>
        </div>
        <LoginForm></LoginForm>
        <div className="login-info">
        <hr />
            <img className="login-icons" src={google} alt="google"/>
            <img className="login-icons" src={gmail} alt="gmail"/>
            <img className="login-icons" src={apple} alt="apple"/>
            <p>Nie masz jeszcze konta? <br /> <Link to={register}><strong>ZAREJESTRUJ SIĘ</strong></Link></p>
        </div>

    </div>);
    

}

export default Login;

