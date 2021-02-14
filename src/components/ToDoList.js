import Finished from "./Finished";
import UnFinished from "./UnFinished";

const ToDoList = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "2%",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        To Do List 📝
      </h1>
      <div className="row">
        <div className="col" style={{ marginTop: "5%" }}>
          <UnFinished />
        </div>
        <div className="col" style={{ marginTop: "5%" }}>
          <Finished />
        </div>
      </div>
    </>
  );
};
export default ToDoList;
