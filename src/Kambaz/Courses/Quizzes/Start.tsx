import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import * as quizClient from "./client";
import { Button, Col, FormCheck, FormControl, Row } from "react-bootstrap";
import { GoQuestion } from "react-icons/go";
import { RiArrowRightBoxFill } from "react-icons/ri";

export default function QuizTake() {
  const { cid, qid } = useParams(); // get the course ID & Quiz ID from the url
  const { currentUser } = useSelector((state: any) => state.accountReducer); //get the current user

  if (!currentUser) {
    console.log(cid);
  }

  const [quiz, setQuiz] = useState<any>();

  const fetchQuiz = async () => {
    const q = await quizClient.findQuizById(qid!);
    setQuiz(q);
  }
  const fetchQuestions = async () => {
    const initialq = await quizClient.findQuestionsForQuiz(qid!);
    setQuestions(initialq);
  }

  const [questions, setQuestions] = useState<any>();

  
  useEffect(()=>{
    fetchQuiz();
    fetchQuestions();
  },[qid])

  console.log(questions);

  return (
    <div>
      <h3>{quiz?.title}</h3>
      {currentUser.role === "FACULTY" && <p>This is a preview of the published version of this quiz</p>}
      <p>Started: Apr 22 at 11:45am</p>
      <h3>Quiz Instructions</h3>
      <hr/>
      {questions?.map((question:any) => (
        <Row>
          <Col sm={1} className="p-0 d-flex justify-content-right mb-4 mt-4 pt-2">
            <RiArrowRightBoxFill className="ms-auto text-secondary" style={{width:'20px', height: '20px'}}/>
          </Col>
          <Col>
            <div className="border border-1 p-0 rounded-1 mb-4 mt-4">
              <div className=" d-flex bg-light justify-content-between align-items-center border-bottom p-4">
                <p className="m-0">{question?.title}</p>
                <p className="m-0">{question?.points} pts</p>
              </div>
              <div className="p-4 ">
                <p className="m-0">{question?.question}</p>
              </div>
              {question?.questionType === "Multiple Choice" && 
                <div className="p-4 pt-0">
                  {question?.possibleAnswers.map((answer:string)=> (
                    <>
                    <hr className="m-2"/>
                    <FormCheck name={`possible-${question?._id}`} type="radio" label={answer} />
                    </>
                  ))}
                </div>
              }
              {question?.questionType === "True or False" && 
                <div className="p-4 pt-0">
                  <>
                    <hr className="m-2 mt-0"/>
                    <FormCheck name={`possible-${question?._id}`} type="radio" label="True"/>
                    <hr className="m-2"/>
                    <FormCheck name={`possible-${question?._id}`} type="radio" label="False"/>
                  </>
                </div>
              }
              {question.questionType === "Fill in the Blank" && 
                <div className="p-4 pt-0">
                    <hr className="mb-4 mt-0"/>
                    <FormControl as="textarea" type="text" defaultValue="" style={{ minHeight: '200px' }} />
                </div>
              }

            </div>
          </Col>
        </Row>
      ))}
      <div className="border border-1 d-flex p-2 rounded-1">
        <Button className="btn-light btn-sm ms-auto">Submit Quiz</Button>
      </div>

      { currentUser.role === "FACULTY" && <Button> Keep Editing This Quiz </Button> }

      <h5 className="mt-4">Questions</h5>
      {questions?.map((question:any, index: number) => (
        <div className="d-flex align-items-center ">
          <div style={{display:"none"}}>{question}</div>
          <GoQuestion />
          <p className="m-1 text-danger font-weight-bold">Question {index + 1}</p>
        </div>
      ))}
      
    </div>
  );
}