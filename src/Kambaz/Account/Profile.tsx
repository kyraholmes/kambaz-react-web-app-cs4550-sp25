import { Link } from "react-router-dom";
import { Form, FormGroup, FormControl, FormSelect } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <Form>
                <h2>Profile</h2>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="Username" defaultValue="alice"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl placeholder="Password" defaultValue="123"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-first-name">
                    <FormControl placeholder="First Name" defaultValue="Alice"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-last-name">
                    <FormControl placeholder="Last Name" defaultValue="Wonderland"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-date">
                    <FormControl type="date" defaultValue="2020-02-26"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-email">
                    <FormControl type="email" placeholder="email" defaultValue="alice@wonderland.com"></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-role">
                    <FormSelect defaultValue="USER">
                        <option value="USER">User</option>
                        <option value="FACULTY">Faculty</option>
                    </FormSelect>
                </FormGroup>
                <Link to={'/Kambaz/Account/Signin'}>
                    <Button type="submit">Signout</Button>
                </Link>
            </Form>
        </div>
    );
}
