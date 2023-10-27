import {useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { sentBoxActions } from '../ReduxStore/SentBoxSlice'
import { inboxActions } from '../ReduxStore/InboxSlice'
import { errorActions } from '../ReduxStore/ErrorSlice'

const useFetch=(url,type)=>{
   
   
   const dispatch=useDispatch()
   function request(){
        async function fetchData() {
         //  dispatch(errorActions.setLoading())
        const response=await fetch(url)
        if(!response.ok)
        {
            throw new Error('Unable to fetch Data! Something Went Wrong')
        }
        const data=await response.json()
        if(data && data.error)
        {
            dispatch(errorActions.setError(data.error))
        }
        let arr=[]
        let i=0
       for(let key in data)
       {
         arr[i]={...data[key],id:key}
         i++
       }
        if(data && type==='INBOX')
        dispatch(inboxActions.addMail(arr))
        
        if(data && type==='SENTBOX')
         dispatch(sentBoxActions.addMails(arr))
    }
   try{
    fetchData()
   }
   catch(error){
      dispatch(errorActions.setError(error))
   }
   
   
    }

 const sendData=(emailData,toEmail)=>{
      async function postData(){
       dispatch(errorActions.setLoading())
        const response=await fetch(url+`/to${toEmail}.json`,{
            method:'POST',
            body:JSON.stringify(emailData)
           })
           const resp=await fetch(url+`/from${localStorage.getItem('email').split('@')[0]}.json`,{
            method:'POST',
            body:JSON.stringify(emailData)
           })
           if(!response.ok || !resp.ok)
           {
            throw new Error('Unable to send Email Try Again')
           }
           const dta=await response.json()
           if(dta && dta.error)
           {
            dispatch(errorActions.setError(dta.error))
           }
           dispatch(sentBoxActions.addSentBoxMails({...emailData,id:Object.values(dta)[0]}))
           dispatch(errorActions.setLoading())
      }
      try{
        postData()
      }
      catch(error)
      {
        dispatch(errorActions.setError(error))
      }
     
       
   } 
   const deleteMail=(id,type)=>{
       async function deleteData(){
        let response
        let email=localStorage.getItem('email').split('@')[0]
       
        if(type==='INBOX')
        { 
             response=await fetch(url+`/to${email}/${id}.json`,{
                method:'DELETE'
               })
        }
       else if(type==='SENTBOX')
        { 
            response=await fetch(url+`/from${email}/${id}.json`,{
                method:'DELETE'
               }) 
        }
           if(!response.ok)
           {
            throw new Error('Unable to process request! try again')
           }
           const data=await response.json()
           
           if(data && data.error)
           { 
            dispatch(errorActions.setError(data.error))
           }
           if(type==='INBOX')
           {
            dispatch(inboxActions.deleteMails(id))
           }
            else if(type==='SENTBOX')
            {
                dispatch(sentBoxActions.deleteSentMails(id))
            }
            
            
       }
       try{
        deleteData()
       }
       catch(error){
        dispatch(errorActions.setError(error))
       }
   }

   const updateData=(item)=>{
      async function  updateMail(){
        
        let email=localStorage.getItem('email').split('@')[0]
        
           const response=await fetch(url+`/to${email}/${item.id}.json`,{
                method:'PUT',
                body:JSON.stringify({...item,read:true,unread:0})
               })
        
      
        if(!response.ok)
        {
         throw new Error('Unable to process request! try again')
        }
        const data=await response.json()
        
        if(data && data.error)
        { 
         dispatch(errorActions.setError(data.error))
        }
        
       dispatch(inboxActions.inboxRead(item))
       dispatch(inboxActions.deleteUnreadCount())
      }
      try{
        updateMail()
      }
      catch(error){
        
      }
    
   }
 
    return [request,sendData,deleteMail,updateData]
}

export default useFetch