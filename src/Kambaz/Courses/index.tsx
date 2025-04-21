import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Quizzes from "./Quizzes";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes } from "react-router"
// import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
//import CourseNavigationBar from "./NavigationBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as coursesClient from "./client";
import QuizEditor from "./Quizzes/Editor";
import QuizDetailsView from "./Quizzes/QuizDetailsView";

export default function Courses() {
  const { courses } = useSelector((state: any) => state.courseReducer);
  const { cid } = useParams();
  const course = courses.find((course : any) => course._id === cid);
  const { pathname } = useLocation();

  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await coursesClient.findUsersForCourse(cid!);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  },[cid]);
 

  return (
    <div id="wd-courses">
      <h2 className="text-danger wd-courses-course-title">
      <RxHamburgerMenu style={{marginRight: "10px"}} />
        {course && course.name} &gt; {pathname.split("/")[4]}
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
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/edit/:qid" element={<QuizEditor />} />
            <Route path="Quizzes/:qid" element={<QuizDetailsView />} />
            <Route path="People" element={<PeopleTable users={users}/>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}
