import "./assets/css/style.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <Router>
      <NavigationBar isLog={false} />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/messages" component={Messages} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
