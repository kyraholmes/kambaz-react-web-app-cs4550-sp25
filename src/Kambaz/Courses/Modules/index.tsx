export default function Modules() {
  return (
    <div>
      <button id="wd-module-button">Collapse All</button>
      <button id="wd-module-button">View Progress</button>
      <select id="wd-module-button" name="publish-select">
        <option value="All">Publish All</option>
      </select>
      <button id="wd-module-button">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
                </ul>
              <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to Web Development</li>
                  <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content-item">Learn how to create user interfaces with HTML</ul>
              <ul className="wd-content-item">Deploy the assignment to Nelify</ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content-item">Introduction to HTML and the DOM</ul>
              <ul className="wd-content-item">Formatting Web content with Headings and Parahraphs</ul>
              <ul className="wd-content-item">Formatting content with Lists and Tables</ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
