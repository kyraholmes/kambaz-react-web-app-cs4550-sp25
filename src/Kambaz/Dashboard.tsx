import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <br />
            <div id="wd-dashboard-courses">
                <Row xs={1} md ={5} className="g-4">
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack Software Developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/webdev.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4550 Web Development</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Website Development Class</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" >
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/kdw.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">PHIL1300 Knowledge in a Digital World</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Knowledge and How to Aquire it</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" >
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/cyber.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CY2550 Foundations of Cybersecurity</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Keeping Computers Safe!</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" >
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/theory.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3800 Theory of Computation</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Computation & Automatas</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/bio.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">BIOL1111 Gen Biology 1</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Gen Bio Class 1</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course">
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/fundies.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS2510 Fundies II</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Java Class!</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    );
}
