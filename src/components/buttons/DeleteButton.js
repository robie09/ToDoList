import { deleteTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const DeleteButton = ({ movieId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(movieId));
  };
  return (
    <button
      style={{ float: "right" }}
      type="button"
      className="btn btn-outline-danger"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
