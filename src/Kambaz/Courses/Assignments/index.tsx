import LessonControlButtons from "../Modules/LessonControlButtons";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import EditAssignment from "./EditAssignment";
import SideGrip from "../Modules/SideGrip";
import AssignmentDetails from "./AssignmentDetails";
import { useParams, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { addAssignment, deleteAssignment, setAssignments } from "./reducer";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
import { useEffect } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAssignments = async () => {
    const modules = await coursesClient.findAssignmentsForCourse(cid!);
    dispatch(setAssignments(modules));
  };

  // calls fetch assignments on load
  useEffect(() => {
    fetchAssignments();
  }, []);
  
  const handleDelete = async (assignmentId : string) => {
     await assignmentClient.deleteAssignment(assignmentId);
     dispatch(deleteAssignment(assignmentId));
  }

  const newAssignment = async () => {
    const newAssignment = await coursesClient.createAssignmentForCourse(cid,{ title: "New Assignment" });
    dispatch(addAssignment(newAssignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignment._id}`);
  }

  return (
    <div id="wd-assignments">
      <div id="wd-assignment-buttons" className="text-nowrap">
        {currentUser.role === "FACULTY" ? <Row>
          <Col xs={4} lg={6} xl={8}>
            <div id="wd-assignment-search-container">
              <label htmlFor="wd-assignment-search"><HiMiniMagnifyingGlass id="wd-search-icon" /></label>
              <input id="wd-assignment-search" type="text" placeholder="Search ..."/>
            </div>
          </Col>
          <Col className="wd-assignment-button-col text-nowrap">
            <Button onClick={newAssignment} variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </Button>
            <Button variant="light" size="lg" className="me-1 float-end" id="wd-add-group-btn">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </Button>
          </Col>
        </Row> : 
        <Row>
          <Col>
            <div id="wd-assignment-search-container" className="mb-4">
              <label htmlFor="wd-assignment-search"><HiMiniMagnifyingGlass id="wd-search-icon" /></label>
              <input id="wd-assignment-search" type="text" placeholder="Search ..."/>
            </div>
          </Col>
        </Row> }
      </div>
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item className="wd-assignment-top p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <SideGrip /> 
            ASSIGNMENTS
            <LessonControlButtons />
          </div>
          {assignments
            .filter((assignment:any) => (assignment.course === cid))
            .map((assignment:any) => (
              <ListGroup className="wd-assignment rounded-0" key="assignment._id">
                <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link" >
                  <ListGroup.Item className="wd-assignment p-3 ps-1">
                    <SideGrip />
                    <EditAssignment />
                    <AssignmentDetails aName={`${assignment.title}`} aAvailDate={`${assignment.dueDate}`} aDueDate={`${assignment.availDate}`}/>
                    <AssignmentControlButtons  deleteAssignment={handleDelete} aid={assignment._id}/>
                  </ListGroup.Item>
                </a>  
              </ListGroup>
            ))
          }
        </ListGroup.Item>
      </ListGroup>
    </div>
  
);
}

 /*
  <div >
    <input placeholder="Search for Assignments"
           id="wd-search-assignment" />
    <button id="wd-add-assignment-group">+ Group</button>
    <button id="wd-add-assignment">+ Assignment</button>
    <h3 id="wd-assignments-title">
      ASSIGNMENTS 40% of Total <button>+</button> </h3>
    <ul id="wd-assignment-list">
      <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/123"
           className="wd-assignment-link" >
          A1 - ENV + HTML
        </a> 
        <br/>
        Multiple Modules | <b>Not available unitl</b> May 6 at 12:00am |
        <b>Due</b> May 13 at 11:59pm | 100pts
      </li>
      <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - CSS + BOOTSTRAP
          </a> 
          <br/>
          Multiple Modules | <b>Not available unitl</b> May 13 at 12:00am |
          <b>Due</b> May 20 at 11:59pm | 100pts
      </li>
      <li className="wd-assignment-list-item">
        <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - JAVASCRIPT + REACT
          </a> 
          <br/>
          Multiple Modules | <b>Not available unitl</b> May 20 at 12:00am |
          <b>Due</b> May 27 at 11:59pm | 100pts
      </li>
    </ul>
  </div>
*/
