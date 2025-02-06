import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import SideGrip from "./SideGrip";

export default function Modules() {
  return (
    <div id="wd-modules-whole">
      <ModulesControls /> <br /> <br /> <br /> <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <SideGrip />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <LessonControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
              <SideGrip />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Introduction to the course 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Learn what is Web Development 
              <LessonControlButtons />  
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
              <SideGrip />
              READING 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />  
              Full Stack Developer - Chapter 1 - Introduction 
              <LessonControlButtons />  
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
              <SideGrip />
              SLIDES 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Introduction to Web Development 
              <LessonControlButtons />  
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Creating an HTTP server with Node.js 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Creating a React Application 
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <SideGrip />
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
            <LessonControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
              <SideGrip />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Learn how to create user interfaces with HTML
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Deploy the assignment to Nelify
              <LessonControlButtons />  
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
              <SideGrip />
              SLIDES
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Introduction to HTML and the DOM
              <LessonControlButtons />  
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Formatting Web content with Headings and Parahraphs
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <SideGrip />
              Formatting content with Lists and Tables 
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
