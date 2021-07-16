import React,{useContext,useEffect} from "react";
import {userLoginCredentialsContext}from "../App";

function StudentDashboard() {
  const userLoginCredentials=useContext(userLoginCredentialsContext);
  useEffect(() => {
    console.log("hi:",userLoginCredentials)
  }, []);
  return (
    <div className="StudentDashBoard flex__container">
      <div className="StudentDashBoard__marksDiv">
        <div className="studentDetailsAndSemesters">
          <div>
            <p>Name: Rishabh</p>
            <p>IPU ID: IP2020202</p>
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
