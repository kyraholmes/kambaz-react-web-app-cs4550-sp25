import { useEffect, useState } from "react";
import { Button, Col, ListGroup, Overlay, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";
import * as coursesClient from "../client";
import { useDispatch, useSelector } from "react-redux";
import { setQuizzes } from "./reducer";


export default function Quizzes() {
  const { cid } = useParams(); // get the course ID from the url
  const { currentUser } = useSelector((state: any) => state.accountReducer); //get the current user
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quizzes, setDBQuizzes] = useState([]);

  const fetchQuizzes = async () => { 
    setDBQuizzes(await coursesClient.findQuizzesForCourse(cid!));
    dispatch(setQuizzes(quizzes));
  };

  const addQuiz = async () => {
    navigate(`/Kambaz/Courses/${cid}/Quizzes/newQuiz`);
  }

  useEffect(()=> {
    fetchQuizzes();
  }, [cid])

  
  return (
    <div id="wd-quizzes">
      <Row>
        <Col xs={4} lg={6} xl={8}>
          <div id="wd-assignment-search-container">
            <label htmlFor="wd-assignment-search"><HiMiniMagnifyingGlass id="wd-search-icon" /></label>
            <input id="wd-assignment-search" type="text" placeholder="Search Quizzes..." />
          </div>
        </Col>
        <Col className="wd-assignment-button-col text-nowrap">
          <Button variant="light" size="lg" className="me-1 ml-2 float-end" id="wd-quiz-options-btn">
            <IoEllipsisVertical className="fs-4" style={{ width: "20px" }} />
          </Button>
          <Button onClick={addQuiz} variant="danger" size="lg" className="me-1 float-end" id="wd-add-quiz-btn">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Quiz
          </Button>
        </Col>
      </Row>
      <hr />
      <ListGroup className="rounded-0" id="wd-quizzes-list">
        <ListGroup.Item className="wd-assignment-top p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <MdArrowDropDown id="wd-quiz-dropdown"/>
            QUIZZES
            <div className="float-end">
              {currentUser.role === "FACULTY" && <GreenCheckmark green={false}/>}
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          {quizzes
            .map((quiz: any) => (
              <ListGroup className="wd-assignment rounded-0" key={`${quiz._id}`}>
                <a href={`#/Kambaz/Courses/${cid}/Quizzes/${quiz._id}`}
                  className="wd-assignment-link" >
                  <ListGroup.Item className="wd-assignment p-3 ps-1">
                  <MdOutlineRocketLaunch id="wd-quiz-rocket"/>
                    <span id="wd-assignment-details">
                      <span id="wd-assignment-name">{quiz.title}</span>
                      <span>
                        <span className="wd-detail-a">
                          {quiz.available ? <span> Available </span> : <span> Closed </span>}
                        </span>
                        <span className="wd-detail-separator"> | </span>
                        <span className="wd-detail-a font-weight-bold">
                          Due
                        </span>
                        &nbsp;
                        <span className="wd-detail-a">
                          {quiz.dueDate}
                        </span>
                        <span className="wd-detail-separator"> | </span>
                        <span className="wd-detail-a ">
                          {quiz.points}
                        </span>
                        &nbsp;
                        <span className="wd-detail-a">
                          pts
                        </span>
                        <span className="wd-detail-separator"> | </span>
                        <span className="wd-detail-a">
                          {quiz.questions.length}
                        </span>
                        &nbsp;
                        <span className="wd-detail-a">
                          Questions
                        </span>
                      </span>
                    </span>
                    <div className="float-end" >
                      {currentUser.role === "FACULTY" && !quiz.status && <GreenCheckmark green={true} />}
                      {currentUser.role === "FACULTY" && quiz.status && <GreenCheckmark green={false} />}

                      <IoEllipsisVertical id={`wd-${quiz.id}-context-btn`} className="fs-4" />

                    </div> 
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