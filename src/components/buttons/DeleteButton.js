import { deleteTask } from "../../store/actions";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const DeleteButton = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };
  return (
    <MdDelete
      style={{ float: "right", color: "maroon" }}
      onClick={handleDelete}
    />
  );
};

export default DeleteButton;
