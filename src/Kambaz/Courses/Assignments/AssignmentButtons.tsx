import { FaPlus } from "react-icons/fa6";
import { Button, Col, Row } from "react-bootstrap";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useSelector } from "react-redux";


export default function AssignmentButtons() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

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
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
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
