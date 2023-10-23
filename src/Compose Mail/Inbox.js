import React,{Fragment} from 'react'
import { Card, Container, Row ,Col} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import './Inbox.css'
import { updateEmailData } from '../ReduxStore/FetchEmailData';
import dot from '../images/record.png'
const Inbox=()=>{
    const dispatch=useDispatch()
    const inboxMails=useSelector((state)=>state.inbox.inboxdata)
     const inboxDetailPageHandler=(item)=>{
        dispatch(updateEmailData(item))
      
        
      
     }
     console.log(inboxMails)
    return(
      <Fragment>
          <Container className='sentbox'>
      { inboxMails.map(item=> <a  onClick={inboxDetailPageHandler.bind(null,item)}><Card className='shadow-lg mt-2' key={item.id}>
        <Row >
            <Col className='col-1 text-center'>
            <input type='checkbox'/>
            </Col>
            <Col className='col-3 d-flex'>
            {!item.read && <img src={dot} alt='' className='dot'/>}
            {item.read?<p>{item.fromemail}</p>:<p><b>{item.fromemail}</b></p>}
            </Col>
            <Col className='col-8 inbox-sec-col'> 
            <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,50)}....</p>
            </Col>
        </Row>
          
       </Card></a>)}
       </Container>
      </Fragment>
    );
}

export default Inbox