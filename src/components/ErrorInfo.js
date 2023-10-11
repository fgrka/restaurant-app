import "./ErrorInfo.css"

function ErrorInfo(props) {
       return <div className="error-info">{props.errorMessage}</div>
}

export default ErrorInfo;