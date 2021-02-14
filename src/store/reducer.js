import { ADD_TASK, DELETE_TASK, UPDATE_TASK, FETCH_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { newTask } = action.payload;

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case FETCH_TASK:
      return {
        ...state,
        tasks: action.payload,
      };

    case UPDATE_TASK:
      // const { updatedTask } = action.payload;

      return { ...state, tasks: [...state.tasks] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};
export default reducer;
