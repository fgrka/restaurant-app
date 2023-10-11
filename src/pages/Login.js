import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import ReturnArrow from "../components/ReturnArrow";
import google from "../assets/facebookbw.png";
import gmail from "../assets/googlebw.png";
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
            <img className="img-facebook" src={google} alt="google"/>
            <img className="img-google" src={gmail} alt="gmail"/>
            <p>Nie masz jeszcze konta? <Link to={register}>ZAREJESTRUJ SIĘ</Link></p>
        </div>

    </div>);
    

}

export default Login;

