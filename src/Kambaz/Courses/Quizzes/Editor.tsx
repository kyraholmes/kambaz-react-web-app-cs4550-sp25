import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import QuizDetails from "./QuizDetails";
import * as quizClient from "./client";


export default function QuizEditor() {
  const {cid, qid} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

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
    dueDate:"2025-04-20",
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

  useEffect(()=> {
    getQuiz();
  }, [qid]);

  const saveQuiz = () => {};
  const cancelChanges = () => {};

  return (
    <div id="wd-quizs-editor">
      <Tabs defaultActiveKey={"Details"}>
        <Tab eventKey="Details" title="Details"> <QuizDetails quiz={quiz} saveQuiz={saveQuiz} cancelChanges={cancelChanges}/> </Tab>
        <Tab eventKey="Questions" title="Questions"></Tab>
      </Tabs>
    </div>
  );
}