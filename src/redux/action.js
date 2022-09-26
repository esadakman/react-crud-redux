import axios from "axios";
import { ADD_USER, DELETE_USERS, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./actionType";

const getUsers = (user) => ({
    type: GET_USERS,
    payload: user,
})
const userAdd = () => ({
    type: ADD_USER,
})

const userDeleted = () => ({
    type: DELETE_USERS
})

const userUpdate = () => ({
    type: UPDATE_USER
})
const getUser = (user) => ({
    type: GET_SINGLE_USER,
    payload: user
})

export const loadUsers = () => {
    return dispatch => {
        return axios.get(process.env.REACT_APP_API).then((resp) => {
            // console.log("resp",resp)
            dispatch(getUsers(resp.data));
        }).catch((error) => console.log("error", error))
    }
}

export const userDelete = (id) => {
    return dispatch => {
        return axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            // console.log("resp",resp)
            dispatch(userDeleted());
            dispatch(loadUsers())
        }).catch((error) => console.log("delete", error))
    }
}
export const addUser = (user) => {
    return dispatch => {
        return axios.post(`${process.env.REACT_APP_API}`,user).then((resp) => {
            // console.log("resp",resp)
            dispatch(userAdd());
            dispatch(loadUsers())
        }).catch((error) => console.log("delete", error))
    }
}

export const getSingleUser = (id) => {
    return dispatch => {
        return axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            // console.log("resp", resp)
            dispatch(getUser(resp.data));
        }).catch((error) => console.log("edit", error))
    }
}

export const updateUser = (user ,id) => {
    return dispatch => {
        return axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp) => {
            // console.log("updateUser", resp)
            dispatch(userUpdate());
        }).catch((error) => console.log("updateUser", error))
    }
}