import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router"
// import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
//import CourseNavigationBar from "./NavigationBar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger wd-courses-course-title">
      <RxHamburgerMenu style={{marginRight: "10px"}} />
        Course 1234
      </h2>
      <hr style={{marginBottom:"30px"}}/>
      <div className="d-flex">
        <div className="d-none d-md-block">
          {/*<CourseNavigation />*/}
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>  
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
