import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as quizClient from "./client";
import { Button, Col, Row } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";


export default function QuizDetailsView () {
  const {cid, qid} = useParams();

  const getQuiz = async () => {
      const q = await quizClient.findQuizById(qid!);
      setGetQuiz(q)
  }

  const [quiz, setGetQuiz] = useState<any>(null);

  const toDate = (d:any) => {
    if (!d || typeof d !== "string" || !d.includes("-")) {
      console.log(d);
      return "Invalid Date"; // Return a fallback value if the date is invalid
    }
    const givenDate = d;
    const [year, month, day] = givenDate.split("-");
    const numericYear = parseInt(year, 10);
    const numericMonth = parseInt(month, 10) - 1; // month is 0-based
    const numericDay = parseInt(day, 10);
    const date = new Date(numericYear, numericMonth - 1, numericDay); // month is 0-based
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  }

  useEffect(()=> {
    getQuiz();
  }, [qid]);

  if (!quiz) {
    return <div>Loading...</div>; // Show loading indicator or message while quiz is being fetched
  } 
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Button variant="light">
          Preview
        </Button>
        <Link to={`/Kambaz/Courses/${cid}/Quizzes/edit/${qid}`} className="btn btn-light ms-2 d-flex align-items-center justify-content-center">
          <FaPencil />
          <p className="mb-0 ms-2">Edit</p>
        </Link>
      </div>
      <h3 className="mb-4">{quiz.title}</h3>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Quiz Type</b></p>
        </Col>
        <Col sm={9}>
            {quiz.quizType}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Points</b></p>
        </Col>
        <Col sm={9}>
            {quiz.points}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Assignment Group</b></p>
        </Col>
        <Col sm={9}>
            {quiz.assignmentGroup}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Shuffle Answers</b></p>
        </Col>
        <Col sm={9}>
            {quiz.shuffleAnswers ? "Yes" : "No"}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Time Limit</b></p>
        </Col>
        <Col sm={9}>
            {quiz.timeLimit} Minutes 
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Multiple Attempts</b></p>
        </Col>
        <Col sm={9}>
            {quiz.attempts > 0 ? "Yes" : "No"}
        </Col>
      </Row>
      {quiz.attempts > 0 && <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Attempts</b></p>
        </Col>
        <Col sm={9}>
            {quiz.viewResponses ? "Yes":"No"}
        </Col>
      </Row>}
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Show Correct Answers</b></p>
        </Col>
        <Col sm={9}>
            {quiz.showAnswers ? "Immediately" : "After Due Date"}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Access Code</b></p>
        </Col>
        <Col sm={9}>
            {quiz.accessCode === "" ? "No" : quiz.accessCode}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>One Question at a Time</b></p>
        </Col>
        <Col sm={9}>
            {quiz.oneQuestionAtATime ? "Yes" : "No"}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Webcam Required</b></p>
        </Col>
        <Col sm={9}>
            {quiz.webCam ? "Yes" : "No"}
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={3} className="text-end">
            <p className="wd-quiz-detail-title"><b>Lock Questions After Answering</b></p>
        </Col>
        <Col sm={9}>
            {quiz.lockQuestions ? "Yes" : "No"}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col><b>Due</b></Col>
        <Col><b>For</b></Col>
        <Col><b>Available From</b></Col>
        <Col><b>Until</b></Col>
      </Row>
      <hr/>
      <Row className="mt-2">
        <Col>{toDate(quiz.dueDate)} at 11:59pm</Col>
        <Col>Everyone</Col>
        <Col>{toDate(quiz.availDate)} at 11:59pm</Col>
        <Col>{toDate(quiz.untilDate)} at 11:59pm</Col>
      </Row>
      <hr/>

    </div>
  );
}