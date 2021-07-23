import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StudentDashboard from "./authPages/StudentDashboard";
import NavBar from "./landingPage/components/NavBar";
import Teachers from "./authPages/Teachers";
import Admin from "./authPages/Admin";

export const userLoginCredentialsContext = createContext();
export const setUserLoginCredentialsContext = createContext();

function App() {
  const [userLoginCredentials, setUserLoginCredentials] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <userLoginCredentialsContext.Provider value={userLoginCredentials}>
          <Switch>
            {userLoginCredentials &&
            userLoginCredentials.route == "Admin" &&
            (userLoginCredentials.isUser === undefined ||
            userLoginCredentials.isUser === true
              ? true
              : false) ? (
              <Route path="/admin/dashboard" component={Admin} />
            ) : (
              0
            )}
            {userLoginCredentials &&
            userLoginCredentials.route == "Teacher" &&
            (userLoginCredentials.isUser === undefined ||
            userLoginCredentials.isUser === true
              ? true
              : false) ? (
              <Route path="/teacher/dashboard" component={Teachers}></Route>
            ) : (
              0
            )}
            {userLoginCredentials &&
            userLoginCredentials.route == "Student" &&
            (userLoginCredentials.isUser === undefined ||
            userLoginCredentials.isUser === true
              ? true
              : false) ? (
              <Route path="/student/dashboard" component={StudentDashboard} />
            ) : (
              0
            )}
            <setUserLoginCredentialsContext.Provider
              value={setUserLoginCredentials}
            >
              <Route path="/" component={Home}></Route>
            </setUserLoginCredentialsContext.Provider>
          </Switch>
        </userLoginCredentialsContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
