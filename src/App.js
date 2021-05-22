import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import "./App.css";

import PrivateRoute from "./PrivateRoute";

export default function App() {
  return(
    <Router>
      <switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
      </switch>
    </Router> 
  )
}