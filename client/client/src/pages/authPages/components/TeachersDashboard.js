import React from 'react'
import {Link} from 'react-router-dom';

function TeachersDashboard() {
      return (
            <div className="TeachersDashboard flex__container">
                  <Link to={'/uploadmarks'}><button className="uploadButton">Upload Marks</button></Link>
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
