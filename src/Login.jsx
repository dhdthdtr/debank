import { Button, Col, Form, Row } from "react-bootstrap";

function Login(props){
    const registerOption = {
        display: 'none'
    }

    const register = () => {
        var username = document.querySelector("#username").value;
        var password = document.querySelector("#password").value;
        var fullname = document.querySelector("#fullname").value;
        var email = document.querySelector("#email").value;
        var dob = document.querySelector("#year").value + "-" + document.querySelector("#month").value + "-" + document.querySelector("#day").value;
        // console.log(username);
        // console.log(password);
        // console.log(fullname);
        // console.log(dob);
        // console.log(email);
        props.handleRegister(username, password, fullname, dob, email)
    }

    const login = () => {
        var username = document.querySelector("#formBasicUsername").value;
        var password = document.querySelector("#formBasicPassword").value;
        props.handleLogin(username, password)
    }

    const updateRegisterOption = () => {
        document.querySelector("#loginBox").style.display = "none"
        document.querySelector("#registerBox").style.display = "block"
    }

    const updateLoginOption = () => {
        document.querySelector("#registerBox").style.display = "none"
        document.querySelector("#loginBox").style.display = "block"
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <div style={{width: "40%"}}>
                <Form>
                    <div id="loginBox">
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username..."/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button size="lg" onClick={login}>Login</Button>
                        <Button size="lg" onClick={() => updateRegisterOption()}>Register</Button>
                    </div>
                    <div style={registerOption} id="registerBox">
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username..." id="username"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" id="fullname"/>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>DOB</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="yyyy" id="year"/>
                            </Col>
                            -
                            <Col>
                                <Form.Control type="text" placeholder="mm" id="month"/>
                            </Col>
                            -
                            <Col>
                                <Form.Control type="text" placeholder="dd" id="day"/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" id="email"/>
                        </Form.Group>
                        <Button size="lg" onClick={() => updateLoginOption()}>Login</Button>
                        <Button size="lg" onClick={register}>Register</Button>
                    </div>
                </Form>  
            </div>
        </div>
    )
}

export default Login;