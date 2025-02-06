import { FormGroup, FormLabel, FormControl, FormSelect, Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

export default function AssignmentEditor() {
  let desc: string = "The assignment is available online.\n\n" + 
  "Submit a link to the landing page of your Web application running on Netlify.\n\n" + 
  "The landing page should include the following:\n\n"+ 
  "- Your full name and section\n" + 
  "- Links to each of the lab assignments\n" +
  "- Link to all of the Kambaz application\n" + 
  "- Links to all the relavant source code repositories\n\n" + 
  "The Kambaz application should include a link to navigate back to the landing page."
   

  return (
    <div id="wd-assignments-editor">
      <Form>
        <FormGroup id="wd-name" className="wd-input-assignment mb-4" controlId="wd-edit-assignment-name">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl type="text" defaultValue="A1" />
        </FormGroup>
        <FormGroup id="wd-description" className="wd-input-assignment mb-4" controlId="wd-edit-assignment-description">
          <FormControl as="textarea" rows={12} 
            value={desc}/>
        </FormGroup>
        <FormGroup as={Row} controlId="wd-points" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Points</FormLabel>
          <Col sm={9}>
            <FormControl type="text" defaultValue="100"></FormControl>
          </Col>
        </FormGroup>
        <FormGroup as={Row} id="wd-assignment-group" controlId="wd-assignment-group" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Assignment Group</FormLabel>
          <Col sm={9}>
            <FormSelect>
              <option>ASSIGNMENTS</option>
            </FormSelect>
          </Col>
        </FormGroup>
        <FormGroup as={Row} id="wd-display-grade" controlId="wd-display-grade" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Display Grade as</FormLabel>
          <Col sm={9}>
            <FormSelect>
              <option>Percentage</option>
            </FormSelect>
          </Col>
        </FormGroup>
        <FormGroup as={Row} id="wd-submission-type" controlId="wd-submission-type" className="mb-4">
          <FormLabel column xs={12} sm={3} className="text-end wd-section-label">Submission Type</FormLabel>
          <Col sm={9}>
            <div className="wd-form-group-container">
              <FormSelect className="mb-3">
                <option>Online</option>
              </FormSelect>
              <FormLabel className="wd-input-label mb-3">Online Entry Options</FormLabel>
              <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" className="mb-3" />
              <Form.Check type="checkbox" id="wd-website-url" label="Website URL" className="mb-3" />
              <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recording" className="mb-3" />
              <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" className="mb-3" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" className="mb-3" />
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
                  <FormControl type="date" defaultValue="2024-05-13"></FormControl>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3">
                  <FormLabel className="wd-input-label">Available from</FormLabel>
                  <FormControl type="date" defaultValue="2024-05-06"></FormControl>
                </Col>
                <Col>
                  <FormLabel className="wd-input-label">Until</FormLabel>
                  <FormControl type="date" defaultValue="2024-05-20"></FormControl>
                </Col>
              </Row>
            </div>
          </Col>
        </FormGroup>
        <hr id="wd-horizontal-line" />
        <Button type="submit" variant="danger" className="float-end wd-save-btn">Save</Button>
        <Button variant="light" className="float-end wd-cancel-btn">Cancel</Button>
      </Form>
    </div>

);
}

/* 
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br/><br/>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option value="Assignments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td/>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Online Entry Options</label> <br />
        
            <input type="checkbox" name="wd-submission-type" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label> <br />

            <input type="checkbox" name="wd-submission-type" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label> <br />

            <input type="checkbox" name="wd-submission-type" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label> <br />

            <input type="checkbox" name="wd-submission-type" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label> <br />

            <input type="checkbox" name="wd-submission-type" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label> <br />

          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
          <label htmlFor="wd-assign-to">Assign to</label> <br />
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"/>
          <td>
            <label htmlFor="wd-due-date">Due</label>  <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"/>
          <td>
            <label htmlFor="wd-available-from">Available From</label>  <br />
            <input type="date" id="wd-available-from" value="2024-05-06" />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>  <br />
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </td>
        </tr>
        <tr>
          <td />
          <td align="right" colSpan={2}>
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>  
      </table>
*/