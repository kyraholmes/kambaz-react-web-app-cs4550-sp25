import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
// import { GoFileCode } from "react-icons/go";
import { BsInboxes } from "react-icons/bs";
//import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";


export default function KambazNavigation() {
    const { pathname } = useLocation();
    const links = [
        {label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard, key: 1},
        {label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid, key: 2},
        {label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline, key: 3},
        {label: "Inbox", path: "/Kambaz/Inbox", icon: BsInboxes, key: 4},
        {label: "Labs", path: "/Labs", icon: LiaCogSolid, key: 5},
    ]

    return (
        <ListGroup id="wd-kambaz-navigation" style={{width: 120}}
        className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <ListGroup.Item id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
            action className="bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
            <ListGroup.Item as={Link} to="/Kambaz/Account" className={`text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <VscAccount className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </ListGroup.Item>
            {links.map((link) => (
                <ListGroup.Item key={link.key} as={Link} to={link.path} className={`bg-black text-center border-0
                    ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger"})}
                    <br />
                    {link.label}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

