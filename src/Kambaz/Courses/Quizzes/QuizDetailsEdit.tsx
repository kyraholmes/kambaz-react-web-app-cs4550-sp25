import { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";


export default function QuizDetailsEdit ({quiz, saveQuiz}:{quiz: any, saveQuiz: (quiz: any, newQuiz: boolean)=> void,}) {
  const {cid, qid} = useParams();
  const navigate = useNavigate();

  const [temp, setQuiz] = useState<any>(quiz || {});

  useEffect(()=> {setQuiz(quiz)},[qid, quiz]);

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  const handleSave = () => {
    if (qid === "newQuiz") {
      saveQuiz(temp, true);
    }
    else {
      saveQuiz(temp, false);
    }

    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  return (
    <div>
      <br/>
      <Form>
        <FormGroup id="wd-name" className="wd-input-assignment mb-2" controlId="wd-edit-assignment-name">
          <FormControl type="text" defaultValue={temp?.title} 
          onChange={(e)=>{setQuiz({...temp, title: e.target.value})}}/>
        </FormGroup>
        <FormGroup id="wd-description" className="wd-input-assignment mb-4" controlId="wd-edit-assignment-description">
          <FormLabel>Quiz Instructions</FormLabel>
          <FormControl as="textarea" rows={6} 
            defaultValue={temp?.description}
            onChange={(e)=>{setQuiz({...temp, description: e.target.value})}}/>
        </FormGroup>
        
        <FormGroup as={Row} id="wd-assignment-group" controlId="wd-assignment-group" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Quiz Type</FormLabel>
          <Col sm={9}>
            <FormSelect defaultValue={temp?.quizType} onChange={(e)=> setQuiz({...temp, quizType: e.target.value})}>
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
            <FormSelect defaultValue={temp?.assignmentGroup} onChange={(e)=> setQuiz({...temp, assignmentGroup: e.target.value})}>
              <option value="Assignments" >ASSIGNMENTS</option>
              <option value="Exams">EXAMS</option>
              <option value="Quizzes">QUIZZES</option>
              <option value="Projects">PROJECTS</option>
            </FormSelect>
          </Col>
        </FormGroup>

        <FormGroup as={Row} id="wd-assignment-group" className="mb-4">
          <Col></Col>
          <Col sm={9}>
            <FormLabel><b>Options</b></FormLabel>
            <Form.Check type="checkbox" id="wd-shuffle-answers-check" label="Shuffle Answers"
            onChange={(e)=> {setQuiz({...temp, shuffleAnswers: e.target.checked})}} />
            <div className="d-flex align-items-center">
              <Form.Check inline={true} type="checkbox" id="wd-time-limit-check" label="Time Limit"
              defaultChecked={temp?.timeLimit > 0} onChange={
                (e)=> {
                  if (!e.target.checked) {
                    setQuiz({...temp, timeLimit: 0})
                  }
                }}
              />
              <FormControl id="wd-minutes-text-entry-quiz" type="text" defaultValue={temp?.timeLimit} 
                onChange={(e)=>{setQuiz({...temp, timeLimit: parseInt(e.target.value)})}} />
                <FormLabel id="wd-minutes-label" htmlFor="wd-minutes-text-entry-quiz" >Minutes</FormLabel>
            </div>
            <div className="wd-form-group-container mt-3" >
              <Form.Check type="checkbox" id="wd-multiple-attempts-check" label="Multiple Attempts"
                onChange={(e)=> {setQuiz({...temp, multipleAttempts: e.target.checked})}} />
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
                  <FormControl type="date" defaultValue={temp?.dueDate}
                  onChange={(e)=>{setQuiz({...temp, due: e.target.value})}}></FormControl>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                  <FormLabel className="wd-input-label">Available from</FormLabel>
                  <FormControl type="date" defaultValue={temp?.availDate}
                  onChange={(e)=>{setQuiz({...temp, avail: e.target.value})}}></FormControl>
                </Col>
                <Col>
                  <FormLabel className="wd-input-label">Until</FormLabel>
                  <FormControl type="date" defaultValue={temp?.untilDate}
                  onChange={(e)=>{setQuiz({...temp, due: e.target.value})}}></FormControl>
                </Col>
              </Row>
            </div>
          </Col>
        </FormGroup>
        <Button type="submit" variant="danger" className="float-end wd-save-btn" onClick={handleSave}>Save</Button>
        <Button variant="light" className="float-end wd-cancel-btn" onClick={handleCancel}>Cancel</Button>
      </Form>
    </div>
  );
}