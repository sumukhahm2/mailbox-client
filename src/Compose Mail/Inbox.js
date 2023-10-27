import React,{Fragment, useState} from 'react'
import { Card, Container, Row ,Col} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux';
import './Inbox.css'
import dot from '../images/record.png'
import DateFormat from '../DateFormat/DateFormat';
import useFetch from '../CustomHooks/useFetch';
import InboxDetail from './InboxDetail';
const Inbox=()=>{
    const dispatch=useDispatch()
    const [showPage,setPage]=useState()
    const inboxMails=useSelector((state)=>state.inbox.inboxdata)
    const [request,sendData,deleteEmail,updateData]=useFetch('https://mailbox-client-database-default-rtdb.firebaseio.com')
     const inboxDetailPageHandler=(item)=>{
      setPage(item)
         updateData(item)
     }
     const deleteEmailHandler=(id)=>{
      console.log(id)
       deleteEmail(id,'INBOX')
     }
     const favouriteHandler=()=>{

     }
    return(
      <Fragment>
        {showPage && <InboxDetail item={showPage} email={showPage.fromemail}/>}
        {!showPage &&<Container className='inbox'>
       { inboxMails.length===0?<h3 className='text-center m-2'>No Inbox Messages</h3>:inboxMails.map(item=> <Card className={item.read?'shadow-lg mt-2 bg-light inbox-read-card':'shadow-lg mt-2 inbox-card'} key={item.id}>
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
             <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,40)}....</p>
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
       </Container>}
      </Fragment>
    );
}

export default Inbox