import LessonControlButtons from "../Modules/LessonControlButtons";
import { ListGroup } from "react-bootstrap";
import EditAssignment from "./EditAssignment";
import SideGrip from "../Modules/SideGrip";
import AssignmentDetails from "./AssignmentDetails";
import AssignmentButtons from "./AssignmentButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentButtons />
      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroup.Item className="wd-assignment-top p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <SideGrip /> 
            ASSIGNMENTS
            <LessonControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <SideGrip />
                <EditAssignment />
                <AssignmentDetails aName="A1" aAvailDate="May 6 at 12:00am" aDueDate="May 13 at 11:59pm"/>
                <LessonControlButtons />
              </ListGroup.Item>
            </a>  
            <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <SideGrip />
                <EditAssignment />
                <AssignmentDetails aName="A2" aAvailDate="May 13 at 12:00am" aDueDate="May 20 at 11:59pm" />
                <LessonControlButtons />
              </ListGroup.Item>
            </a>
            <a href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" >
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <SideGrip />
                <EditAssignment />
                <AssignmentDetails aName="A3" aAvailDate="May 20 at 12:00am" aDueDate="May 27 at 11:59pm"/>
                <LessonControlButtons />  
              </ListGroup.Item>
            </a>
          </ListGroup>
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
