import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { ListGroup } from "react-bootstrap";
import SideGrip from "./SideGrip";
import * as db from "../../Database";
import { useParams } from "react-router-dom";

export default function Modules() {
  const {cid} = useParams();
  const modules = db.modules;

  return (
    <div id="wd-modules-whole">
      <ModulesControls /> <br /> <br /> <br /> <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module:any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary"> 
                <SideGrip />
                {module.name}
                <LessonControlButtons />
              </div>
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson:any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
                    <SideGrip />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
}
