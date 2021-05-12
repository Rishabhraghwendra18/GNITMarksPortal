import React from "react";

function StudentDashboard() {
  return (
    <div className="StudentDashBoard flex__container">
      <div className="StudentDashBoard__marksDiv">
        <div className="studentDetailsAndSemesters">
          <div>
            <p>Name: Rishabh</p>
            <p>IPU ID: IP2020202</p>
          </div>
          <div>
            <a className="semester__number" href="#">
              Sem1
            </a>
          </div>
          <div>
            <a className="semester__number" href="#">
              Sem2
            </a>
          </div>
          <div>
            <a className="semester__number" href="#">
              Sem3
            </a>
          </div>
          <div>
            <a className="semester__number" href="#">
              Sem4
            </a>
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="studentMarks">
          <div className="subjects">
            <h2>Subjects</h2>
          </div>
          <div className="verticalLine"></div>
          <div className="marks">
            <h2>Marks</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
