import { authActions } from "./AuthSlice"

export const authSignUp=(item)=>{
  return async(dispatch)=>{
    let errorMessage='Authentication Error'
    async function postData() {
        const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6gKTkFX7jOB0_y5l32LCnSImer0FA-So',{
            method:'POST',
            body:JSON.stringify(item) 
         })

         if(!response.ok)
         {
            throw new Error('Something Went Wrong!')
         }
         const data=await response.json()
         if(data && data.error && data.error.message)
         {
           errorMessage=data.error.message
           dispatch(authActions.setAuthError(errorMessage))
         }
         if(data.idToken)
         {
            dispatch(authActions.setToken(data.idToken))
            console.log(data)
         }
    }

    try{
        await postData()
    }
    catch(error)
    {
        dispatch(authActions.setAuthError(error))
    }
     

  }
}