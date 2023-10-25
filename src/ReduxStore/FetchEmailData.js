import { sentBoxActions } from "./SentBoxSlice"
import { inboxActions } from "./InboxSlice"


export const senderData=(sendingData)=>{
    return async(dispatch)=>{
        const fromEmail=localStorage.getItem('email').split('@')[0]
        const toEmail=sendingData.toemail.split('@')[0]
        const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/to${toEmail}.json`,{
            method:'POST',
            body:JSON.stringify(sendingData)
        })
        const data=await response.json()
        const resp=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/from${fromEmail}.json`,{
            method:'POST',
            body:JSON.stringify(sendingData)
        })
        
        dispatch(sentBoxActions.addSentBoxMails({...sendingData,id:data.name}))
       
    }
}

export const fetchSentData=(item)=>{
    
    return async(dispatch)=>{
       async function fetchData()
        {
        const email=localStorage.getItem('email').split('@')[0]
        const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/from${email}.json`)
        const data=await response.json()
        const resp=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/to${email}.json`)
        const dta=await resp.json()
        let arr=[]
        let i=0
        for(let key in data)
        {
            arr[i]={...data[key],id:key}
            i++
        }
        let a=[]
        let j=0
        for(let key in dta)
        {
            a[j]={...dta[key],id:key}
            j++
        }
       
       
        
       
      
        dispatch(inboxActions.addMail(a))
        dispatch(sentBoxActions.addMails(arr))
    }

try{
    await fetchData()
  }
  catch(error){

  }
  
}
}

export const updateEmailData=(item)=>{
    return async(dispatch)=>{
        const email=localStorage.getItem('email').split('@')[0]
     const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/to${email}/${item.id}.json`,{
        method:'PUT',
        body:JSON.stringify({...item,read:true,unread:0})
      })
      const data=await response.json()
      console.log(data)
      dispatch(inboxActions.inboxRead())
      dispatch(inboxActions.deleteUnreadCount())
    }
}

export const deleteEmail=(id)=>{
    return async(dispatch)=>{
        const email=localStorage.getItem('email').split('@')[0]
       const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/to${email}/${id}.json`,{
        method:'DELETE'
       })
       const data=await response.json()
       console.log(data)
       dispatch(inboxActions.deleteMails(id))
    }
  }
  export const deleteSentEmail=(id)=>{
    return async(dispatch)=>{
        const email=localStorage.getItem('email').split('@')[0]
       const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/from${email}/${id}.json`,{
        method:'DELETE'
       })
       const data=await response.json()
       console.log(data)
       dispatch(sentBoxActions.deleteSentMails(id))
    }
  }