import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  GET_SINGLE_USER,
  GET_USERS,
  UPDATE_USER,
} from "./actionType";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});
const userAdd = () => ({
  type: ADD_USER,
});

const userDeleted = () => ({
  type: DELETE_USER,
});

const userUpdate = () => ({
  type: UPDATE_USER,
});
const getUser = (users) => ({
  type: GET_SINGLE_USER,
  payload: users,
});

export const loadUsers = () => {
  return function (dispatch) {
    return axios
      .get(process.env.REACT_APP_API)
      .then((resp) => {
        // console.log("resp",resp)
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const userDelete = (id) => {
  return function (dispatch) {
    return axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log("resp",resp)
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("delete", error));
  };
};
export const addUser = (user) => {
  return function (dispatch) {
    return axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        // console.log("resp",resp)
        dispatch(userAdd());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("delete", error));
  };
};

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        // console.log("resp", resp)
        dispatch(getUser(resp.data));
      })
      .catch((error) => console.log("singleUser", error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    return axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((resp) => {
        // console.log("updateUser", resp)
        dispatch(userUpdate());
      })
      .catch((error) => console.log("updateUser", error));
  };
};
