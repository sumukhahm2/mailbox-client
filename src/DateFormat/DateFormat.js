

import React,{Fragment} from 'react'

const DateFormat=(props)=>{
    const Days=(dayNum)=>{

        const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        return days[dayNum]
      }
   let output
   const today=new Date()
   const sentDate=new Date(props.date)
   const day=Days(sentDate.getDay())
   const date=sentDate.getDate()
    //const hours=sentDate.getHours()
    //const minutes=sentDate.getMinutes()
 
    const diff=today-sentDate
    const hour=Math.floor((diff / 1000 / 60 / 60) % 24);
    if(hour>23)
    {
       output=day+' '+date
    }
    else{
      output=sentDate.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true })
    }
    return(
     <Fragment>
        {output}
     </Fragment>
    )
}

export default DateFormat

  