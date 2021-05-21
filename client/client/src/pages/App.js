import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StudentDashboard from "./authPages/StudentDashboard";
import NavBar from "./landingPage/components/NavBar";
import TeachersDashboard from "./authPages/TeachersDashboard";
import Admin from "./authPages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/admindashboard" component={Admin}/>
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
