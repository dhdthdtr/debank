import { Button } from "react-bootstrap";

function Login(props){
    return (
        <Button size="lg" onClick={props.handleLogin}>Login</Button>
    )
}

export default Login;