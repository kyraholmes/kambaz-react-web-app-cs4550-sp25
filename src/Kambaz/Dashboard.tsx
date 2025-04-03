import { Link } from "react-router-dom";
import { Row, Col, FormControl } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./enrollReducer";

export default function Dashboard(
    {userCourses, unenrolledUserCourses, addCourse,
         deleteCourse, updateCourse,
        enrollCourse, unenrollCourse} : {
        userCourses: any[];
        unenrolledUserCourses: any[];
        addCourse: (course:any) => void;
        deleteCourse: (courseId:string) => void;
        updateCourse: (course:any) => void;
        enrollCourse: (courseId:string) => void;
        unenrollCourse: (courseId:string) => void;

    }) 

    
{
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    
    const [showEnrollments, setShowEnrollments] = useState(false);
    const handleEnrollShow = () => {setShowEnrollments(!showEnrollments)};

    const handleEnroll = (courseId : any) => {
        enrollCourse(courseId);
        dispatch(addEnrollment({user: currentUser._id, course: courseId}));
    };
    const handleUnenroll = (courseId : any) => {
        unenrollCourse(courseId);
        dispatch(deleteEnrollment({user: currentUser._id, course: courseId}));
    };

    const [course, setCourse] = useState({name: "New Course", description: ""});

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "FACULTY" ? <div>
                <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={() => {addCourse(course)}} > Add </button>
                <button className="btn btn-warning float-end me-2"
                        onClick={() => {updateCourse(course)}} id="wd-update-course-click">
                Update
                </button>
                    </h5>
                    <br />
                <FormControl value={course.name} className="mb-2" 
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                <FormControl value={course.description} 
                    onChange={(e) => setCourse({ ...course, description: e.target.value }) } />

                <hr />
            </div> : null}
            <div className="d-flex justify-content-between">
            <h2 id="wd-dashboard-published">Published Courses ({userCourses.length})</h2> 
            {currentUser.role === "STUDENT" && <Button onClick={handleEnrollShow}>Enrollments</Button>}
            </div>
            <hr />
            <br />
            <div id="wd-dashboard-courses">
                <Row xs={1} md ={5} className="g-4">
                    {userCourses
                        .map((course : any) => (
                        <Col className="wd-dashboard-course">
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src={course.imageLoc} width="100%" height={160}/>
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidded">{course.name}</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>{course.description}</Card.Text>
                                        <Button variant="primary">Go</Button>
                                        {currentUser.role === "FACULTY" ? <>
                                            <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>
                                        </> : null }
                                        {showEnrollments && <Button  className="float-end" variant="info" onClick={(event) => {
                                           event.preventDefault();
                                           handleUnenroll(course._id)
                                        }}>Unenroll</Button>}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                    {showEnrollments && unenrolledUserCourses
                        .map((course : any) => (
                        <Col className="wd-dashboard-course">
                            <Card>
                                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img variant="top" src={course.imageLoc} width="100%" height={160}/>
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidded">{course.name}</Card.Title>
                                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "50px" }}>{course.description}</Card.Text>
                                        <Button variant="primary">Go</Button>
                                        {showEnrollments && <Button  className="float-end" variant="info" onClick={(event) => {
                                            event.preventDefault();
                                            handleEnroll(course._id);
                                        }}>Enroll</Button>}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </div>
    );
}
