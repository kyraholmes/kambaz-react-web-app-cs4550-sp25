import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigations";
import Courses from "./Courses";
import "./styles.css"
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

// import { Row, Col } from "react-bootstrap";

export default function Kambaz() {  
    const [courses, setCourses] = useState<any[]>([]);
    const [unCourses, setUnCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchCourses();
      fetchUnCourses();
    }, [currentUser]);

    const fetchUnCourses = async () => {
        try {
          const courses = await userClient.findMyUnCourses();
          setUnCourses(courses);
        } catch (error) {
          console.error(error);
        }
    };

    const addNewCourse = async(course:any) => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    }

    const deleteCourse = async (courseId: string) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log(status)
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = async (course:any) => {
        await courseClient.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) { return course; }
            else { return c; }
        }));
    };
    
    
    
    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation />
                    <div className="wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={
                                <ProtectedRoute>
                                    <Dashboard 
                                        userCourses={courses} 
                                        unenrolledUserCourses={unCourses} 
                                        addCourse={addNewCourse} 
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                    />
                                </ProtectedRoute>} />
                            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        </Routes>
                    </div>
            </div>
        </Session>
    );
}