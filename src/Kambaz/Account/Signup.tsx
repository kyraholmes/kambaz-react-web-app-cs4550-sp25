import { Link } from "react-router-dom";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <Form>
                <h2>Signup</h2>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="username"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl type="password" placeholder="password"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password-verify">
                    <FormControl type="password" placeholder="verify password"></FormControl>
                </FormGroup>
                <Link to={'/Kambaz/Dashboard'}>
                    <Button type="submit">Signup</Button>
                </Link>
            </Form>
            <Link to={'/Kambaz/Account/Signin'}>Signin</Link>
        </div>
    );
}
