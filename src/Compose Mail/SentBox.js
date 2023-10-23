import React,{Fragment} from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import './SentBox.css'
const SentBox=()=>{
  const sentMails=useSelector((state)=>state.sentbox.sentMails)
    return(
        <Fragment>
      <Container className='sentbox'>
      { sentMails.map(item=> <a ><Card className='shadow-lg mt-2' key={item.id}>
        <Row >
            <Col className='col-1 text-center'>
            <input type='checkbox'/>
            </Col>
            <Col className='col-3 d-flex'>
            {item.read?<p>{item.toemail}</p>:<p><b>{item.toemail}</b></p>}
            </Col>
            <Col className='col-8 inbox-sec-col'> 
            <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,50)}....</p>
            </Col>
        </Row>
          
       </Card></a>)}
       </Container>
    </Fragment>
    )
    

}

export default SentBox