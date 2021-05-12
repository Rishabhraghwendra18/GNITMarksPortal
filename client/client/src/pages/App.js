import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StudentDashboard from "./authPages/StudentDashboard";
import NavBar from "./landingPage/components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route path="/studentDashboard">
            <StudentDashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
