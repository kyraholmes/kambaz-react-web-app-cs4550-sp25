import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = () => {
      const user = db.users.find(
        (u: any) => u.username === credentials.username && u.password === credentials.password);
      if (!user) return;
      dispatch(setCurrentUser(user));
      console.log("dispatch", dispatch(setCurrentUser(user)))
      navigate("/Kambaz/Dashboard");
    };
  
    return (
        <div id="wd-signin-screen">
            <Form>
                <h2>Signin</h2>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="username"
                        defaultValue={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    ></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl type="password" placeholder="password"
                        defaultValue={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    ></FormControl>
                </FormGroup>
                <Button onClick={signin}>Signin</Button>
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