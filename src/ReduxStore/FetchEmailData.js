import { sentBoxActions } from "./SentBoxSlice"

export const senderData=(sendingData)=>{
    return async(dispatch)=>{
        const email=localStorage.getItem('email').split('@')[0]
        const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/sent${email}.json`,{
            method:'POST',
            body:JSON.stringify(sendingData)
        })
        const data=await response.json()
        dispatch(sentBoxActions.addSentBoxMails({...sendingData,id:data.name}))
       
    }
}

export const fetchSentData=()=>{
    return async(dispatch)=>{
        const email=localStorage.getItem('email').split('@')[0]
        const response=await fetch(`https://mailbox-client-67adc-default-rtdb.firebaseio.com/sent${email}.json`)
        const data=await response.json()
        console.log(data)
        const arr=[]
        let i=0
        for(let key in data)
        {
            arr[i]={...data,id:key}
            i++
        }
        dispatch(sentBoxActions.addSentBoxMails(arr))
    }
}