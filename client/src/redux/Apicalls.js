import {loginStart,loginSuccess,loginFailure} from "./userSlice"

export const login=async(dispatch,userinfo)=>{
    console.log(userinfo)
    dispatch(loginStart())
    try{
         fetch("https://dummyjson.com/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userinfo)
        })
        .then((res)=>res.json()).then((loggeduser)=>dispatch(loginSuccess(loggeduser)))
        
    }catch(err){
        dispatch(loginFailure())
        console.log(err)
    }
}