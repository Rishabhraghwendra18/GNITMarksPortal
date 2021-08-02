import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import TeachersDashboard from "./components/TeachersDashboard";
import UploadMarks from "./components/UploadMarks";

function Teachers({match}) {
      return (
            <BrowserRouter>
            <Switch>
                  <Route path="/teacher/uploadmarks" component={UploadMarks}/>
                  <Route path="/" component={TeachersDashboard}/>
            </Switch>
            </BrowserRouter>
      )
}

export default Teachers
