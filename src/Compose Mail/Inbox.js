import React,{Fragment} from 'react'
import { Card, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
const Inbox=()=>{
    const inboxMails=useSelector((state)=>state.inbox.inboxdata)
    console.log(inboxMails)
    return(
      <Fragment>
          <Container className='sentbox'>
      { inboxMails.map(item=> <Card className='shadow-lg' key={item.id}>
          <Card.Title>from-{item.fromemail}</Card.Title>
          <Card.Header>{item.subject}</Card.Header>
          <Card.Body>{item.description}</Card.Body>
       </Card>)}
       </Container>
      </Fragment>
    );
}

export default Inbox