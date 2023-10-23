import React,{Fragment} from 'react'
import { Card, Container, Row ,Col} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import './Inbox.css'
import { updateEmailData } from '../ReduxStore/FetchEmailData';
import dot from '../images/record.png'
import { deleteEmail } from '../ReduxStore/FetchEmailData';
const Inbox=()=>{
    const dispatch=useDispatch()
    const inboxMails=useSelector((state)=>state.inbox.inboxdata)
     const inboxDetailPageHandler=(item)=>{
        dispatch(updateEmailData(item))
      
        
      
     }
     const deleteEmailHandler=(id)=>{
        dispatch(deleteEmail(id))
     }
    return(
      <Fragment>
          <Container className='sentbox'>
      { inboxMails.map(item=><Row fluid> <Col className='col-11'><a  onClick={inboxDetailPageHandler.bind(null,item)}><Card className='shadow-lg mt-2' key={item.id}>
        <Row className=''>
        
            <Col className='col-1 text-center '>
            <input type='checkbox'/>
            </Col>
            <Col className='col-3 d-flex'>
            {!item.read && <img src={dot} alt='' className='dot'/>}
            {item.read?<p>{item.fromemail}</p>:<p><b>{item.fromemail}</b></p>}
            </Col>
            <Col className='col-4 inbox-sec-col d-flex'> 
            <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,50)}....</p>
            </Col>
        </Row>
       </Card></a></Col>
        <Col className='m-3 '>
        <button onClick={deleteEmailHandler.bind(null,item.id)} ><i className="fa-solid fa-trash" style={{color: '#d81103'}}></i></button>
        </Col></Row>)}
       </Container>
      </Fragment>
    );
}

export default Inbox