import React,{Fragment} from 'react'
import { Card, Container } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import './SentBox.css'
const SentBox=()=>{
  const sentMails=useSelector((state)=>state.sentbox.sentMails)
    return(
        <Fragment>
      <Container className='sentbox'>
      { sentMails.map(item=> <Card className='shadow-lg' key={item.id}>
          <Card.Title>To-{item.email}</Card.Title>
          <Card.Header>{item.subject}</Card.Header>
          <Card.Body>{item.description}</Card.Body>
       </Card>)}
       </Container>
    </Fragment>
    )
    

}

export default SentBox