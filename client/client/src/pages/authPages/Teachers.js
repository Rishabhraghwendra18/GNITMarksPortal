import React,{useContext,useEffect} from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import TeachersDashboard from "./components/TeachersDashboard";
import UploadMarks from "./components/UploadMarks";
import {userLoginCredentialsContext}from "../App";

function Teachers({match}) {
      const userLoginCredentials=useContext(userLoginCredentialsContext);
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
