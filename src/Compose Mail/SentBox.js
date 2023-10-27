import React,{Fragment,useState} from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import InboxDetail from './InboxDetail'
import DateFormat from '../DateFormat/DateFormat'
import useFetch from '../CustomHooks/useFetch'
import './SentBox.css'
const SentBox=()=>{
  const [showpage,setPage]=useState()
  const [request,sendData,deleteEmail]=useFetch('https://mailbox-client-database-default-rtdb.firebaseio.com')
  const sentMails=useSelector((state)=>state.sentbox.sentMails)
 const dispatch=useDispatch()
  const deleteSentBoxMail=(id)=>{
    console.log(id)
    deleteEmail(id,'SENTBOX')
  }
  let date=new Date().getTime()
  const favouriteHandler=()=>{
    
  }
  const sentboxDetailPageHandler=(item)=>{
    setPage(item)
       
   }
    return(
        <Fragment>
          {showpage && <InboxDetail item={showpage} email={showpage.toemail}/>}
     {!showpage && <Container className='sentbox'>
      {sentMails.length===0?<h3 className='text-center m-2'>No Sent Messages</h3>:sentMails.map(item=> <Card className='shadow-lg mt-2 sentbox-card' key={item.id}>
        <Row >
          <Col className='col-9'>
          <a onClick={sentboxDetailPageHandler.bind(null,item)}>
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
            {item.read?<p>{item.toemail}</p>:<p><b>{item.toemail}</b></p>}
            </Col>
            <Col className='col-8 inbox-sec-col'> 
            <p className='subject-description'><b>{item.subject}</b>    {item.description.substring(0,50)}....</p>
            </Col>
            </Row>
            </a>
            </Col>
            <Col className='delete-col col-3'>
            <Row>
                <Col>
                <button onClick={deleteSentBoxMail.bind(null,item.id)}><i className="fa-solid fa-trash" style={{color: '#d81103'}}></i></button>
                </Col>
                <Col>
                <i class="fa-regular fa-clock"></i>
                </Col>
                <Col>
                <i class="fa-solid fa-sheet-plastic"></i>
                </Col>
                <Col>
                <i class='fas fa-exclamation-circle'></i>
                </Col>
                <Col>
                <i class="fa-solid fa-trash-can"></i>
                </Col>
                
              </Row>
            
            </Col>
            <Col>
              <p className='date-time'><DateFormat date={item.date}/></p> 
            </Col>
        </Row>
          
       </Card>)}
       </Container>}
    </Fragment>
    )
    

}

export default SentBox