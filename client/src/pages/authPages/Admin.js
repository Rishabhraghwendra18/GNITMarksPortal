import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import AccountSignUp from "./AccountSignUp";
import AdminDashboard from "./components/Admin";

function Admin() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/accountsignup" component={AccountSignUp} />
          <Route path="/" component={AdminDashboard}/>
        </Switch>
      
    </BrowserRouter>
  );
}

export default Admin;
