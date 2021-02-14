import { addTask } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useState } from "react";

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { taskSlug } = useParams();
  const foundTask = useSelector((state) =>
    state.tasks.find((task) => task.slug === taskSlug)
  );

  const [tasks, setTask] = useState(
    foundTask ?? {
      name: "",
      status: false,
      priority: "",
      date: "",
    }
  );

  const handleChange = (event) =>
    setTask({ ...tasks, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(tasks));
    history.push("/");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Add New Task </h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={tasks.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">priority</label>
        <select name="priority">
          <option name="low" value={tasks.priority}>
            low
          </option>
          <option name="middle" value={tasks.priority}>
            middle
          </option>
          <option name="high" value={tasks.priority}>
            high
          </option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>

        <input
          type="date"
          id="start"
          name="date"
          value={tasks.date}
          min="2021-01-01"
          max="2021-12-31"
        />
      </div>

      <button type="submit" className="btn btn-info float-right">
        Add
      </button>
    </form>
  );
};

export default TaskForm;
