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
      return { ...state, tasks: [...state.tasks] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (product) => product.id !== action.payload.productId
        ),
      };

    default:
      return state;
  }
};
export default reducer;
