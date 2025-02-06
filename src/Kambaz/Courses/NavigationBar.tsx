import { Container, Nav, Navbar} from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

export default function CourseNavigationBar() {
  return (
    <Navbar expand="lg">
      <Container id="wd-nav-container">
        <Navbar.Brand href="#Home"/>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg"/>
        <Navbar.Collapse>
          <Nav id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Home" className="list-group-item active border border-0">Home</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Assignments" className="list-group-item text-danger border border-0">Assignments</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes</Nav.Link>
            <Nav.Link as={Link} to="/Kambaz/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*<RxHamburgerMenu className="me-4 fs-4 mb-1 wd-courses-hamburger-icon" /> */