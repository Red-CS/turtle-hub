import "./App.css";
import { Route, Switch } from "react-router-dom";

import Combat from "./pages/Combat";
import Mining from "./pages/Mining";
import Farming from "./pages/Farming";

function App() {
  return (
    <Switch>
      <Route path="/mining" component={Mining} />
      <Route path="/farming" component={Farming} />
      <Route path="/" component={Combat} />
    </Switch>
  );
}

export default App;
