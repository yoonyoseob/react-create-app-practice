import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../routes/Home";
import Detail from "/Users/yoonyoseob/Desktop/dev/reactjs_nomadcoder_project/src/routes/Detail.js";
function App(){
  return <Router>
    <Switch>
      <Route path="/movie">
          <Detail />
        </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;