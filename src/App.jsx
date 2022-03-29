import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Carasoual from "./components/Carasoual/Carasoual.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/single">
          <Single />
        </Route>
        <Route exact path="/carasoual">
          <Carasoual />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
    
      </Switch>
    </Router>
  );
}

export default App;
