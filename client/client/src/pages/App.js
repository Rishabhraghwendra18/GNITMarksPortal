import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StudentDashboard from "./authPages/StudentDashboard";
import NavBar from "./landingPage/components/NavBar";
import TeachersDashboard from "./authPages/TeachersDashboard";
import AdminDashboard from "./authPages/AdminDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/admindashboard" component={AdminDashboard}/>
          <Route path="/teacherdashboard" component={TeachersDashboard}>
          </Route>
          <Route path="/studentdashboard" component={StudentDashboard}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
