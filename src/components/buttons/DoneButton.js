import { updateTask } from "../../store/actions";
import { useDispatch } from "react-redux";
import { MdDoneAll } from "react-icons/md";

const DoneButton = ({ status }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    status = true;
    dispatch(updateTask(status));
  };
  return (
    <MdDoneAll
      style={{ float: "right", color: "green" }}
      onClick={handleUpdate}
    />
  );
};

export default DoneButton;
