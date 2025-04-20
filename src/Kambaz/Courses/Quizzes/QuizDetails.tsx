import { useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";


export default function QuizDetails ({quiz, saveQuiz, cancelChanges}:{quiz: any, saveQuiz: ()=> void, cancelChanges: () => void}) {
  
  const ogQuiz = quiz;
  const [temp, setQuiz] = useState(quiz);

  return (
    <div>
      <br/>
      <Form>
        <FormGroup id="wd-name" className="wd-input-assignment mb-2" controlId="wd-edit-assignment-name">
          <FormControl type="text" defaultValue={quiz?.title} 
          onChange={(e)=>{setQuiz({...temp, title: e.target.value})}}/>
        </FormGroup>
        <FormGroup id="wd-description" className="wd-input-assignment mb-4" controlId="wd-edit-assignment-description">
          <FormLabel>Quiz Instructions</FormLabel>
          <FormControl as="textarea" rows={6} 
            defaultValue={quiz?.description}
            onChange={(e)=>{setQuiz({...temp, description: e.target.value})}}/>
        </FormGroup>
        
        <FormGroup as={Row} id="wd-assignment-group" controlId="wd-assignment-group" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Quiz Type</FormLabel>
          <Col sm={9}>
            <FormSelect defaultValue={quiz?.quizType} onChange={(e)=> setQuiz({...temp, quizType: e.target.value})}>
              <option value="Graded Quiz">Graded Quiz</option>
              <option value="Practice Quiz">Practice Quiz</option>
              <option value="Graded Survey">Graded Survey</option>
              <option value="Ungraded Survey">Ungraded Survey</option>
            </FormSelect>
          </Col>
        </FormGroup>

        <FormGroup as={Row} id="wd-assignment-group" controlId="wd-assignment-group" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Assignment Group</FormLabel>
          <Col sm={9}>
            <FormSelect defaultValue={quiz?.assignmentGroup} onChange={(e)=> setQuiz({...temp, assignmentGroup: e.target.value})}>
              <option value="Assignments" >ASSIGNMENTS</option>
              <option value="Exams">EXAMS</option>
              <option value="Quizzes">QUIZZES</option>
              <option value="Projects">PROJECTS</option>
            </FormSelect>
          </Col>
        </FormGroup>

        <FormGroup as={Row} id="wd-assignment-group" controlId="wd-assignment-group" className="mb-4">
          <Col></Col>
          <Col sm={9}>
            <FormLabel><b>Options</b></FormLabel>
            <Form.Check type="checkbox" id="wd-shuffle-answers-check" label="Shuffle Answers" />
            <Form.Check type="checkbox" id="wd-time-limit-check" label="Time Limit" />
            <FormControl type="text" defaultValue={quiz?.timeLimit} 
              onChange={(e)=>{setQuiz({...temp, timeLimit: e.target.value})}} />
            <div className="wd-form-group-container" >
              <Form.Check type="checkbox" id="wd-multiple-attempts-check" label="Multiple Attempts"/>
            </div>
          </Col>
        </FormGroup>
        
        <FormGroup as={Row} id="wd-assign" controlId="wd-submission-type" className="mb-4">
          <FormLabel column xs={12} sm={3} className="wd-section-label text-end">Assign</FormLabel>
          <Col sm={9}>
            <div className="wd-form-group-container">
              <Row>
                <Col className="mb-3">
                  <FormLabel className="wd-input-label">Assign to</FormLabel>
                  <div id="wd-assign-to-box">
                    <Button id="wd-everyone-item" variant="light" className="d-flex ">
                      Everyone
                      <IoClose id="wd-close-x"/>
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                  <FormLabel className="wd-input-label">Due</FormLabel>
                  <FormControl type="date" defaultValue={quiz?.dueDate}
                  onChange={(e)=>{setQuiz({...temp, due: e.target.value})}}></FormControl>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                  <FormLabel className="wd-input-label">Available from</FormLabel>
                  <FormControl type="date" defaultValue={quiz?.availDate}
                  onChange={(e)=>{setQuiz({...temp, avail: e.target.value})}}></FormControl>
                </Col>
                <Col>
                  <FormLabel className="wd-input-label">Until</FormLabel>
                  <FormControl type="date" defaultValue={quiz?.untilDate}
                  onChange={(e)=>{setQuiz({...temp, due: e.target.value})}}></FormControl>
                </Col>
              </Row>
            </div>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}