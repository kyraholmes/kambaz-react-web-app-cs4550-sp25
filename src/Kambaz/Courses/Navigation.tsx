import { Link, useParams, useLocation } from "react-router-dom";


export default function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigaton" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kambaz/Courses/${cid}/${link}`} id={`wd-course-${link}-link`}
        className= {`${pathname.includes(link) ? "active" : "text-danger"} 
        list-group-item border border-0`}>
        {link}
        </Link>

      ))}
    </div>
  );
}
