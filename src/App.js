import "./App.css";

import Finished from "./components/Finished";
import UnFinished from "./components/UnFinished";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
