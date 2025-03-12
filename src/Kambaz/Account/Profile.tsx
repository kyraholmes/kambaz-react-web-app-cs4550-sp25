import { useNavigate } from "react-router-dom";
import { Form, FormGroup, FormControl, FormSelect } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Profile() {

    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchProfile = () => {
      if (!currentUser) return navigate("/Kambaz/Account/Signin");
      setProfile(currentUser);
    };
    const signout = () => {
      dispatch(setCurrentUser(null));
      navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);
    
    
    return (
        <div id="wd-profile-screen">
            <h2>Profile</h2>
            {currentUser && <Form>
                <FormGroup controlId="wd-username">
                    <FormControl placeholder="Username" defaultValue={profile.username}
                        onChange={(e) => setProfile({ ...profile, username:  e.target.value })}
                    ></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-password">
                    <FormControl placeholder="Password" defaultValue={profile.password}
                    onChange={(e) => setProfile({ ...profile, username:  e.target.value })}
                    ></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-first-name">
                    <FormControl placeholder="First Name" defaultValue={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName:  e.target.value })}></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-last-name">
                    <FormControl placeholder="Last Name" defaultValue={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-date">
                    <FormControl type="date" defaultValue={profile.dob}
                    onChange={(e) => setProfile({ ...profile, dob:  e.target.value })}></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-email">
                    <FormControl type="email" placeholder="Email" defaultValue={profile.email}
                    onChange={(e) => setProfile({ ...profile, email:  e.target.value })}></FormControl>
                </FormGroup>
                <FormGroup controlId="wd-role">
                    <FormSelect defaultValue="USER" onChange={(e) => setProfile({ ...profile, role:  e.target.value })} >
                        <option value="USER">User</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                        <option value="STUDENT">Student</option>
                    </FormSelect>
                </FormGroup>
                <Button  onClick={signout} >Signout</Button>
            </Form> }
        </div>
    );
}
