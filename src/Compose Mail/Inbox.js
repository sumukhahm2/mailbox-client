import React,{Fragment} from 'react'
import { Card, Container, Row ,Col} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import './Inbox.css'
import { updateEmailData } from '../ReduxStore/FetchEmailData';
import dot from '../images/record.png'
import { deleteEmail } from '../ReduxStore/FetchEmailData';
import DateFormat from '../DateFormat/DateFormat';
const Inbox=()=>{
    const dispatch=useDispatch()
    const inboxMails=useSelector((state)=>state.inbox.inboxdata)
     const inboxDetailPageHandler=(item)=>{
        dispatch(updateEmailData(item))
      
        
      
     }
     const deleteEmailHandler=(id)=>{
        dispatch(deleteEmail(id))
     }
     const favouriteHandler=()=>{

     }
    return(
      <Fragment>
          <Container className='inbox'>
       { inboxMails.map(item=> <Card className='shadow-lg mt-2 inbox-card' key={item.id}>
        <Row className=''>
        <Col className='col-9'>
         <a  onClick={inboxDetailPageHandler.bind(null,item)}>
          <Row>
            <Col className='col-1 text-center '>
             <Row >
              <Col className='col-6'>
               <input type='checkbox' className='checkbox'/>
              </Col>
              <Col className=''>
               <input id="star1" className="star" type="checkbox" title="bookmark page" onChange={favouriteHandler}></input>
              </Col>
              </Row> 
            </Col>
            <Col className='col-3 d-flex'>
             {!item.read && <img src={dot} alt='' className='dot'/>}
             {item.read?<p>{item.fromemail}</p>:<p><b>{item.fromemail}</b></p>}
            </Col>
            <Col className='col-8 inbox-sec-col d-flex'> 
             <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,50)}....</p>
            </Col>
            </Row>
             </a>
            </Col>
            <Col className=' delete-col col-3'>
              <Row className=''>
                <Col className='del'>
                 <button onClick={deleteEmailHandler.bind(null,item.id)} ><i className="fa-solid fa-trash" style={{color: '#d81103'}}></i></button>
                 <span >Delete</span>
                </Col>
                <Col className='snooze'>
                <i className="fa-regular fa-clock"></i>
                <span>Snooze</span>
                </Col>
                <Col className='draft'>
                <i className="fa-solid fa-sheet-plastic"></i>
                <span>Draft</span>
                </Col>
                <Col className='spam'>
                <i className='fas fa-exclamation-circle'></i>
                <span>Spam</span>
                </Col>
                <Col className='trash'>
                <i className="fa-solid fa-trash-can"></i>
                <span>Trash</span>
                </Col>
                
              </Row>
        </Col>
        <Col className='time-col col-1'>
              <p className='date-time'><DateFormat date={item.date}/></p> 
            </Col>
        </Row>
       </Card>
        )}
       </Container>
      </Fragment>
    );
}

export default Inbox