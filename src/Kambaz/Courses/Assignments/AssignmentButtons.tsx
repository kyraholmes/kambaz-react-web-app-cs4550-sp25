import { FaPlus } from "react-icons/fa6";
import { Button, Col, Row } from "react-bootstrap";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";


export default function AssignmentButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { currentCourse } = useSelector((state: any) => state.courseReducer);

  const navigate = useNavigate();
  const { cid } = useParams();
  const dispatch = useDispatch();

  const newAssignment = () => {
    const id = uuidv4()
    dispatch(addAssignment({_id: id, course: cid}));
    navigate(`/Kambaz/Courses/${cid}/Assignments/${id}`);
  }

  return (
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
  );
}
