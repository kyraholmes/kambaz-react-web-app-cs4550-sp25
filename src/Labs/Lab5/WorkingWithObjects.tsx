const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

import { useState } from "react";
import { Form, FormCheck, FormControl } from "react-bootstrap";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2025-04-01",
    completed: false,
    score: 0,
  })

  const [module, setModule] = useState({
    id: 1,
    name: "Working with NodeJS",
    description: "How to create servers and use them in your Web App",
    course: "CS4550"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>

      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>


      <div className="d-flex justify-content-between pt-2 pb-2">
        <FormControl className="w-75" id="wd-assignment-score"
          defaultValue={assignment.score}
          onChange={(e) => {
            setAssignment({ ...assignment, score: parseInt(e.target.value)})
        }}/>

        <a id="wd-update-assignment-score"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>

      </div>
      <div className="d-flex justify-content-between pt-2 pb-2">
        <Form>
          <FormCheck 
            type="checkbox"
            id="wd-assignment-completed-checkbox"
            label="Completed"
            onChange={(e)=> {
              setAssignment({...assignment, completed: e.target.checked})
            }}
          />
        </Form>

        <a id="wd-update-assignment-score"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completion
        </a>

      </div>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>

      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>


      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>

      <a id="wd-retrieve-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr/>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module name
      </a>
      
      <hr/>
    </div>
  );
}