import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <Form>
                <h2>Signin</h2>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="username"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl type="password" placeholder="password"></FormControl>
                </FormGroup>
                <Link to={'/Kambaz/Dashboard'}>
                    <Button type="submit">Signin</Button>
                </Link>
            </Form>
            <Link to={'/Kambaz/Account/Signup'}>Signup</Link>
        </div>
    );
}

/*
    <h3>Sign in</h3>
    <input placeholder="username" className="wd-username" /> <br />
    <input placeholder="password" type="password" className="wd-password" /> <br />
    <Link to="/Kambaz/Dashboard" id="wd-signin-btn"> Sign in </Link> <br />
    <Link to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
*/