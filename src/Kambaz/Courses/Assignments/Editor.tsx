export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
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
      
    </div>


);
}
