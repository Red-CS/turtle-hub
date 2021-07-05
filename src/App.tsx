import "./App.css";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default App;
