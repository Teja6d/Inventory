import * as types from "./actionTypes";

import axios from "axios";

const port = process.env.PORT || 4000;
export const loadUserSuccess=(users)=>{
  return{
   type :types.LOAD_USERS_SUCCESS,
   users
}
}

export const addUserSuccess=(user)=>{
    return {
        type :types.ADD_USER_SUCCESS,
        user
    }
}




export  const loadUsers=()=>{
    return dispatch=>{ 
        axios.get(`http://localhost:${port}/users`).then(response=>{
       //     console.log(response.data);
            dispatch(loadUserSuccess(response.data))
        }).catch(error=>console.log(error))

    }
}

export const addUser=(user)=>{
    console.log(port)
    return dispatch=>{
        axios.post(`http://localhost:${port}/users`,user).then(response=>{
            //console.log(response.data);
            dispatch(addUserSuccess(user))
        }).catch(error=>console.log(error))
    }
}