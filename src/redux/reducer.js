import { ADD_USER, DELETE_USERS, GET_USERS } from "./actionType";

const initialState = {
    users:[],
    user:{},
    loader:true,
};

const usersReducer= (state = initialState , action) => {
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users:action.payload,
                loader:false,
            }
        case DELETE_USERS:
        case ADD_USER:
            return{
                ...state,
                loader:false
            }
        default:
            return state;
    }
};

export default usersReducer;