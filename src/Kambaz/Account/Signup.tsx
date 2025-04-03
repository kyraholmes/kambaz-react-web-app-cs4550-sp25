import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useState } from "react";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [verify, setVerify] = useState("");
    const signup = async () => {
      const currentUser = await client.signup(user);
      if (verify === currentUser.password) {
        dispatch(setCurrentUser(currentUser));
        navigate("/Kambaz/Account/Profile");
      }; 
    };

    return (
        <div id="wd-signup-screen">
            <Form>
                <h2>Signup</h2>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="username" 
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl type="password" placeholder="password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </FormGroup>
                <FormGroup controlId="wd-password-verify">
                    <FormControl type="password" placeholder="verify password"
                        onChange={(e) => {
                            setVerify(e.target.value)
                        }} />
                </FormGroup>
                <Link to={'/Kambaz/Dashboard'}>
                    <Button type="submit" onClick={signup}>Signup</Button>
                </Link>
            </Form>
            <Link to={'/Kambaz/Account/Signin'}>Signin</Link>
        </div>
    );
}
