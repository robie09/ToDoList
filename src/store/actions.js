import axios from "axios";
// ACTION TYPES
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FETCH_TASK = "FETCH_TASK ";
// ACTIONS
export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/");
      dispatch({
        type: FETCH_TASK,
        payload: res.data,
      });
    } catch (error) {
      console.log("ERROR : something wrong happening ");
    }
  };
};

export const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/`, newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask: res.data },
      });
    } catch (error) {
      console.log("ERROR : something wrong happening ");
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`http://localhost:8000/${taskId}`);
      dispatch({
        type: DELETE_TASK,
        payload: { taskId: taskId },
      });
    } catch (error) {
      console.log("ERROR : something wrong happening ");
    }
  };
};

export const updateTask = (updatedTask) => {
  return async (dispatch) => {
    try {
      await axios.put(`http://localhost:8000/${updatedTask.id}`, updatedTask);
      dispatch({
        type: UPDATE_TASK,
        payload: { updatedTask: updatedTask },
      });
    } catch (error) {
      console.log("ERROR : something wrong happening ");
    }
  };
};
