import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload.username,
            state.isFetching=false
        },
        loginFailure:(state)=>{
            state.isFetching=false,
            state.error=true
        },
    }
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions
export default userSlice.reducer