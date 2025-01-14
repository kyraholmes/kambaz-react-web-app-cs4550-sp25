import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/CS4550/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/webdev.jpg" width={200} />
                        <div>
                            <h5> CS4550 Web Development </h5>
                            <p className="wd-dashboard-course-title">
                                Website Development Class
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/PHIL1300/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/kdw.jpg" width={200} />
                        <div>
                            <h5> PHIL1300 Knowledge in a Digital World </h5>
                            <p className="wd-dashboard-course-title">
                                Knowledge and how to Aquire it
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/CY2550/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/cyber.jpg" width={200} />
                        <div>
                            <h5> CY2550 Foundations of Cybersecurity </h5>
                            <p className="wd-dashboard-course-title">
                                Keeping Computers Safe!
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/CS3800/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/theory.jpg" width={200} />
                        <div>
                            <h5> CS3800 Theory of Computation </h5>
                            <p className="wd-dashboard-course-title">
                                Automata, Complexity, and Computability Theory
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/BIOL1111/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/bio.jpg" width={200} />
                        <div>
                            <h5> BIOL1111 General Biology 1 </h5>
                            <p className="wd-dashboard-course-title">
                                Gen Bio Class 1
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/CS2510/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/fundies.jpg" width={200} />
                        <div>
                            <h5> CS2510 Fundies II </h5>
                            <p className="wd-dashboard-course-title">
                                Java Class!
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
