import "./App.css";
import TaskForm from "./components/TaskForm";
import { Link } from "react-router-dom";

import { Route, Switch } from "react-router";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/newtask">
          <TaskForm />
        </Route>
      </Switch>
      <Link to="/newtask">
        <button>AddTask</button>
      </Link>
      <Route exact path="/">
        <ToDoList />
      </Route>
    </div>
  );
}

export default App;
