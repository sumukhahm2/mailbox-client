import React,{Fragment} from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { deleteSentEmail } from '../ReduxStore/FetchEmailData'
import DateFormat from '../DateFormat/DateFormat'
import './SentBox.css'
const SentBox=()=>{
  const sentMails=useSelector((state)=>state.sentbox.sentMails)
 const dispatch=useDispatch()
  const deleteSentBoxMail=(id)=>{
    dispatch(deleteSentEmail(id))
  }
  let date=new Date().getTime()
  const favouriteHandler=()=>{
    
  }
    return(
        <Fragment>
      <Container className='sentbox'>
      { sentMails.map(item=> <Card className='shadow-lg mt-2 sentbox-card' key={item.id}>
        <Row >
          <Col className='col-9'>
          <a>
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
       </Container>
    </Fragment>
    )
    

}

export default SentBox