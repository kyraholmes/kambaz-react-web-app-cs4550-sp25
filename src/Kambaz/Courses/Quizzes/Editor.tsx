import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import QuizDetailsEdit from "./QuizDetailsEdit";
import * as quizClient from "./client";
import * as courseClient from "../client";
import QuestionEditor from "./QuestionEditor";
import { IoEllipsisVertical } from "react-icons/io5";


export default function QuizEditor() {
  const { cid, qid } = useParams();


  const newQuiz = {
    course: cid,
    questions: [],
    status: false,
    title: "New Quiz",
    quizType: "Graded",
    points: 100,
    quizGroup: "Quizzes",
    shuffle: true,
    timeLimit: 20,
    MultipleAttempts: 0,
    showAnswers: false,
    AccessCode: "",
    oneQuestionAtATime: true,
    webCam: false,
    lockQuestion: false,
    dueDate: "2025-04-20",
    availDate: "2025-04-20",
    untilDate: "2025-04-20"
  }

  const getQuiz = async () => {
    if (qid === "newQuiz") {
      setGetQuiz(newQuiz);
    }
    else {
      const q = await quizClient.findQuizById(qid!);
      setGetQuiz(q)
    }
  }

  const [quiz, setGetQuiz] = useState<any>();

  useEffect(() => {
    getQuiz();
  }, [qid]);

  const saveQuiz = async (quiz: any, newQuiz: boolean) => {
    if (newQuiz) {
      await courseClient.createQuizForCourse(cid, quiz);
    }
    else {
      await quizClient.updateQuiz(quiz);
    }
  };

  return (
    <div id="wd-quizs-editor">
      <div className="d=flex justify-content-center">
        <Row>
          <Col>
            <p><b>Points {quiz?.points} </b></p>
          </Col>
          <Col>
            <p>{quiz?.status ? "Published" : "Not Published"}</p>
          </Col>
          <Col>
            <Button variant="light" size="lg" className="me-1 ml-2 float-end" id="wd-quiz-options-btn">
              <IoEllipsisVertical className="fs-4" />
            </Button>
          </Col>
        </Row>
      </div>
      <hr />
      <Tabs defaultActiveKey={"Details"}>
        <Tab eventKey="Details" title="Details"> <QuizDetailsEdit quiz={quiz} saveQuiz={saveQuiz} /> </Tab>
        <Tab eventKey="Questions" title="Questions"><QuestionEditor quiz={quiz} /></Tab>
      </Tabs>
    </div>
  );
}