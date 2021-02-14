import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteButton from "./buttons/DeleteButton";
import { updateTask } from "../store/actions";
import DoneButton from "./buttons/DoneButton";

const Finished = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks)
    .filter(
      (task) =>
        task.name.toLowerCase().includes(query.toLowerCase()) &&
        task.status === true
    )
    .map((task) => (
      <>
        <li
          className="form-control"
          style={{
            height: "60px",
            marginBottom: "2%",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {task.name}
          <DeleteButton taskId={task.id} />
          <button
            style={{ float: "right", marginRight: "1%" }}
            type="button"
            className="btn btn-success"
            onClick={() => {
              task.status = false;
              dispatch(updateTask(task.status));
            }}
          >
            Not Done
          </button>
        </li>
      </>
    ));

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header">
        <h3>Done ✔️ </h3>
        <div>
          <h4 style={{ color: "orange" }}>
            {taskList.length}
            {taskList.length > 1
              ? " Tasks"
              : taskList.length === 0
              ? " Tasks"
              : " Task"}
          </h4>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <div style={{ marginBottom: "5%" }}>
            <h4>Search</h4>
            <SearchBar setQuery={setQuery} />
          </div>
        </h5>
        <p className="card-text" style={{ color: "black" }}>
          {taskList}
        </p>
      </div>
    </div>
  );
};

export default Finished;
