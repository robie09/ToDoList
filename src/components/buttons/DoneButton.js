import { updateTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const DoneButton = ({ status }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    status = true;
    dispatch(updateTask(status));
  };
  return (
    <button type="button" className="btn btn-success" onClick={handleUpdate}>
      Done
    </button>
  );
};

export default DoneButton;
