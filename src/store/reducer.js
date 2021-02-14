import { ADD_TASK, DELETE_TASK, UPDATE_TASK, FETCH_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (product) => product.id !== action.payload.productId
        ),
      };

    case UPDATE_TASK:
      return { ...state, tasks: [...state.tasks] };
    default:
      return state;
  }
};
export default reducer;
