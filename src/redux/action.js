import axios from "axios";
import { ADD_USER, DELETE_USERS, GET_USERS } from "./actionType";

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users,
})
const addUser = () => ({
    type: ADD_USER,
})

const deleteUser = () => ({
    type: DELETE_USERS
})

export const loadUsers = () => {
    return dispatch => {
        return axios.get(process.env.REACT_APP_API).then((resp) => {
            // console.log("resp",resp)
            dispatch(getUsers(resp.data));
        }).catch((error) => console.log("error", error))
    }
}

export const UserDelete = (id) => {
    return dispatch => {
        return axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            // console.log("resp",resp)
            dispatch(deleteUser());
            dispatch(loadUsers())
        }).catch((error) => console.log("delete", error))
    }
}
export const Useradd = (userdata) => {
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_API}`,userdata).then((resp) => {
            // console.log("resp",resp)
            dispatch(addUser());
            dispatch(loadUsers())
        }).catch((error) => console.log("delete", error))
    }
}