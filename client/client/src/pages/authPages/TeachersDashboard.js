import React from 'react'
import {Link, Route} from 'react-router-dom';
import UploadMarks from "./components/UploadMarks";

function TeachersDashboard({match}) {
      return (
            <div className="TeachersDashboard flex__container">
                  <Link to={`${match.url}/uploadmarks`}><button className="uploadButton">Upload Marks</button></Link>
                  <Route path={`${match.url}/uploadmarks`}>
                        <UploadMarks/>
                  </Route>
                  <div className="dashboard">
                  <div className="teacherInformation"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, impedit.</p></div>
                  <div className="teachersStudentMarks">
                        <table>
                              <tr>
                                    <th>Student Name</th>
                                    <th>Marks</th>
                              </tr>
                        </table>
                  </div>
                  </div>
            </div>
      )
}

export default TeachersDashboard
