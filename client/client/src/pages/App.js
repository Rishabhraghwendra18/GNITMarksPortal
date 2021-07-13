import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StudentDashboard from "./authPages/StudentDashboard";
import NavBar from "./landingPage/components/NavBar";
import Teachers from "./authPages/Teachers";
import Admin from "./authPages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route path="/admin/dashboard" component={Admin}/>
          <Route path="/teacher/dashboard" component={Teachers}>
          </Route>
          <Route path="/student/dashboard" component={StudentDashboard}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
