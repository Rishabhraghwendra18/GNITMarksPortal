import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import AccountSignUp from "./AccountSignUp";
import PromoteStudent from "./PromoteStudent";
import AdminDashboard from "./components/AdminDashboard";

function Admin() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/accountsignup" component={AccountSignUp} />
          <Route path="/promotestudent" component={PromoteStudent}/>
          <Route path="/" component={AdminDashboard}/>
        </Switch>
      
    </BrowserRouter>
  );
}

export default Admin;
