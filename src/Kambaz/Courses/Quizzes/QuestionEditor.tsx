import { useEffect, useState } from "react";
import { Form, Button, FormControl, FormGroup, FormSelect, FormLabel, Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import * as quizzesClient from "./client";
import { useParams } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

export default function QuestionEditor({quiz}:{quiz:any}) {
  const {cid, qid} = useParams();

  console.log(cid, quiz);
  const fetchQuestions = async () => {
    const initialq = await quizzesClient.findQuestionsForQuiz(qid!);
    setQuestions(initialq);
    setOriginalQuestions(JSON.parse(JSON.stringify(initialq)));
  }
  useEffect(()=> {
    fetchQuestions();
  },[qid])

  const [questions, setQuestions] = useState<any>();
  const [originalQuestions, setOriginalQuestions] = useState<any[]>([]);

  const handleChangeQ = (q:any) => {
    const newQ = questions?.map((question:any) => {
      if(question._id === q._id) {
        question = q;
      }
      return question;
    })
    setQuestions(newQ);
  }

  const handleSave = async (question:any) => {
    await quizzesClient.updateQuestion(question);
  }

  const handleCancel = (questionId:string) => 
    {
      const originalQuestion = originalQuestions.find((q) => q._id === questionId);
      console.log(originalQuestion);
      const newQ = questions?.map((question:any) => {
        if(question._id === questionId) {
          return originalQuestion;
        }
        return question;
      })
      console.log("before: ", questions)
      console.log("after: ", newQ)
      setQuestions(newQ);
    }

  const handleAdd = async () => {
    const newQu = {title:"New Question", questionType:"Multiple Choice", possibleAnswers:[], correctAnswers:[], quiz: qid, points: 0, question: ""}
    console.log("Adding new question: ", newQu);
    await quizzesClient.addQuestionToQuiz(newQu,qid);
    setQuestions([...questions, newQu])
  }



  return (
    <div>
      <div className="d-flex justify-content-center">
        <Button className="d-flex justify-content-center align-items-center mt-4" variant="light">
          <FaPlus />
          <p className="ms-1 m-0" onClick={handleAdd}>New Question</p>
        </Button>
      </div>
      <hr/>
      {
        questions?.map((question:any) => 
        <div key={question._id} className="d-flex justify-content-center border border-2 rounded-1 p-2 mt-4  ">
            <Form className="question-form">
              <Row>
                <Col>
                  <FormControl type="text" value={question.title} onChange={(e) => handleChangeQ({...question, title: e.target.value}) }/>
                </Col>
                <Col>
                  <FormSelect value={question.questionType} onChange={(e)=> handleChangeQ({...question, questionType: e.target.value})}>
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True or False">True or False</option>
                    <option value="Fill in the Blank">Fill in the Blank</option>
                  </FormSelect>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <FormLabel>pts</FormLabel>
                    </Col>
                    <Col>
                      <FormControl type="text" value={question.points} onChange={(e) => handleChangeQ({...question, points: e.target.value}) }/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
              <Row>
                <FormGroup>
                    <FormLabel  className="mt-2"><b>Question:</b></FormLabel>
                    <FormControl type="text" value={question.question} onChange={(e) => handleChangeQ({...question, question: e.target.value}) }/>
                  </FormGroup>
              </Row>
              <hr />
              <FormLabel className="mt-2"><b>Answers:</b></FormLabel>
              { question.questionType === "Multiple Choice" && 
                <div>
                  {question.possibleAnswers.map((answer:string, index:number) => (
                      <div>
                        <Row>
                          <Col>
                            <Form.Check name={`correctAnswerGroup-${question._id}`} type="radio" value={question.correctAnswers.includes(answer) ? 1: 0} label={`${ question.correctAnswers.includes(answer) ? "Correct Answer" : "Possible Answer"}`} 
                            onChange={(e) => {
                              handleChangeQ({...question, correctAnswers: [answer]})}}/>
                          </Col>
                        <Col>
                          <FormControl type="text" value={answer} onChange={(e) => {
                            const updatedAnswers = [...question.possibleAnswers];
                            updatedAnswers[index] = e.target.value;
                            handleChangeQ({ ...question, possibleAnswers: updatedAnswers });
                          }} />
                          </Col>
                          <Col xs="auto" className="pr-2 justify-content-center align-items-center">
                            <TiDeleteOutline color="Red" style={{width: "40px", height:"25px"}} onClick={(e)=> {
                              const updatedQuestions = question.possibleAnswers.filter((a:any)=> answer !== a)
                              handleChangeQ({...question, possibleAnswers: updatedQuestions})
                            } }/>
                          </Col>
                        </Row>
                      </div>
                
                  ))}
                  <Row>
                    <Col >
                      <Button className="btn-sm mt-2 float-end" id="smol-button" onClick={()=> { const updatedAnswers = [...question.possibleAnswers, ""] ;
                        handleChangeQ({...question, possibleAnswers: updatedAnswers});
                      }}>Add Answer</Button>
                    </Col>
                  </Row> 
                </div>
              }
              { question.questionType === "True or False" && 
                <div>
                {question.possibleAnswers.map((answer:string) => (
                    <div>
                      <Row>
                        <Col>
                          <Form.Check name={`correctAnswerGroup-${question._id}`} type="radio" value={question.correctAnswers.includes(answer) ? 1: 0} label={answer} onChange={(e) => {
                            handleChangeQ({...question, correctAnswers: [answer]})}}/>
                        </Col>
                        <Col>
                        </Col>
                      </Row>
                    </div>
                ))}
              </div>
              }
              { question.questionType === "Fill in the Blank" && 
                  <div>
                  {question.correctAnswers.map((answer:string, index:number) => (
                      <div>
                        <Row>
                          <Col>
                            <FormLabel>Possible Answer:</FormLabel>
                          </Col>
                          <Col>
                            <FormControl type="text" value={answer} onChange={(e) => {
                              const updatedAnswers = [...question.correctAnswers];
                              updatedAnswers[index] = e.target.value; 
                              handleChangeQ({ ...question, correctAnswers: updatedAnswers });} }/>
                          </Col>
                          <Col xs="auto" className="pr-2 justify-content-center align-items-center">
                            <TiDeleteOutline color="Red" style={{width: "40px", height:"25px"}} onClick={(e)=> {
                              const updatedAnswers = question.correctAnswers.filter((a:any, i:number) => i !== index); 
                              handleChangeQ({ ...question, correctAnswers: updatedAnswers });
                            } }/>
                          </Col>
                        </Row>
                      </div>
                
                  ))}
                  <Row>
                    <Col >
                      <Button className="btn-sm mt-2 float-end" id="smol-button" onClick={()=> { const updatedAnswers = [...question.correctAnswers, ""] ;
                        handleChangeQ({...question, correctAnswers: updatedAnswers});
                      }}>Add Answer</Button>
                    </Col>
                  </Row> 
                </div>
              }
              <Button className="btn-sm btn-light mt-2" onClick={()=> handleCancel(question._id)}>Cancel</Button>
              <Button className="btn-sm btn-danger mt-2 ms-2" onClick={() => handleSave(question)}>Update</Button>

            </Form>
        </div>
        )
      }
    </div>
  );
}