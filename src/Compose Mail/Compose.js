import React,{Fragment,useState,useRef} from 'react'
import { Container,Row,Col, Button,Form} from 'react-bootstrap';
import ProfileIcon from '../images/user.png'
import './Compose.css'
import { useSelector } from 'react-redux';
import inboxIcon from '../images/receive-mail.png'
import sentBoxIcon from '../images/send.png'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import SentBox from './SentBox';
import ComposeIcon from '../images/new-email.png'
import useFetch from '../CustomHooks/useFetch';
import Spinner from '../Spinner';
import Inbox from './Inbox';
const Compose=()=>{
    const emailFieldRef=useRef()
    const subjectRef=useRef()
    const [editorState,setState]=useState(EditorState.createEmpty())
    const [isSentBox,setSentBox]=useState(false)
    const [isCompose,setCompose]=useState(false)
    const [isInbox,setInbox]=useState(false)
    const unread=useSelector((state)=> state.inbox.unreadCount)
    const error=useSelector((state)=> state.error.error)
    const loading=useSelector((state)=> state.error.loading)
  const onEditorStateChange=(editorState) => {
   setState(editorState)
  };
  
  const [request,sendData]=useFetch('https://mailbox-client-database-default-rtdb.firebaseio.com')
    const onSubmitCompose=(event)=>{
      event.preventDefault()
      
      const sendingData={
        fromemail:localStorage.getItem('email'),
        toemail:emailFieldRef.current.value,
        subject:subjectRef.current.value,
        description:editorState.getCurrentContent().getPlainText(),
        read:false,
        unread:1,
        date:new Date()
      }
      const toEmail=emailFieldRef.current.value.split('@')[0]
      sendData(sendingData,toEmail)
      
    }
    const sentBoxButtonHandler=()=>{
     setSentBox(true)
     setCompose(false)
     setInbox(false)
    }
    const composeButtonHandler=()=>{
      setCompose(true)
       setSentBox(false)
       setInbox(false)
    }
    const inboxButtonHandler=()=>{
      setInbox(true)
       setSentBox(false)
       setCompose(false)
    }
    console.log(error)
    return(
     <Fragment>
       <Container className='border main-page' fluid>
          <Row>
            <Col className='col-1 side-panel'>
            <Row >
            <button onClick={composeButtonHandler}><img src={ComposeIcon}/></button>
              <h5>Compose</h5>
              </Row>
              <Row>
              <button onClick={inboxButtonHandler}><img src={inboxIcon}/>{unread>0 && <span className='unread-count'>{unread} unread</span>}</button>
              <h5>Inbox</h5>
              </Row>
              <Row>
              <button onClick={sentBoxButtonHandler}><img src={sentBoxIcon}/></button>
              <h5>Sentbox</h5>
              </Row>
            </Col>
            <Col className='compose-form-col col-11'>
            {isCompose &&  <Form onSubmit={onSubmitCompose} className='compose-form'>
             <Row>
             <Col className='col-10 email-col d-flex'>
                <p className='mt-3'>To</p>
                <img src={ProfileIcon} alt='' className='profile-image mt-3 '/>
                <input type='text' className='w-100 ' ref={emailFieldRef}/> 
               </Col>
               <Col  className='col-2 bcc-cc'>
                <p>bcc/cc</p>
                </Col>
             </Row>
             <hr/> 
             <Row className='d-flex'>
             <Col className='col-1 subject'>
             <label>Subject</label>
              </Col>
             <Col className='col-11 subject-input'>
             <input type='text' className='w-100' ref={subjectRef}/>
            </Col>
          </Row>
          <hr/>
          <Row className='description-area'>
          <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
          </Row>
          <Row className='send'>
            <Col className='col-1'>
                <Button type='submit'>{loading?<Spinner/>:'Send'}</Button>
                {error && <p>{error}</p>}
            </Col>
            <Col className='col-2'>
                <Row>
                    <Col>
                    <i className="fa-solid fa-paperclip"></i>
                    </Col>
                    <Col>
                    <i className="fa-solid fa-gift"></i>
                    </Col>
                    <Col>
                    <i className="fa-regular fa-heart"></i>
                    </Col>
                    <Col>
                    <i className="fa-regular fa-face-smile"></i>
                    </Col>
                </Row>
            </Col>
            <Col className='col-2'>
                <Row>
                    <Col className='col-3'><i className="fa-solid fa-bold"></i></Col>
                    <Col  className='col-3'><i className="fa-solid fa-italic"></i></Col>
                    <Col  className='col-3'><i className="fa-solid fa-font"></i></Col>
                </Row>
            </Col>
            <Col className='col-5'></Col>
            <Col className='col-2'>
            <i class="fa-solid fa-trash"></i>
            </Col>
            </Row>
            </Form> }
            {isSentBox  && <SentBox/>}
            {isInbox  && <Inbox/>}
            </Col>
          </Row>
       </Container>
     </Fragment>
    );
    }
export default Compose