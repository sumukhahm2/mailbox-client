import react,{Fragment,useRef} from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap';
import './SignUp.css'
import { authLogIn } from '../ReduxStore/fetchAuthActions';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogIn=()=>{
const emailRef=useRef()
const passwordRef=useRef()
const dispatch=useDispatch()
const navigate=useNavigate()
 const loginHandler=(event)=>{ 
  event.preventDefault()
  const data={
    email:emailRef.current.value,
    password:passwordRef.current.value,
    returnSecureToken:true
  }
  
  dispatch(authLogIn(data))
  
 

 }
    return(
        <Fragment>
            <Container className=' authentication' fluid>
            
                <Row>
                    <Col className='col-4'></Col>
                    
                    <Col className='col-4 form m-5' >
                    <Form.Text className='fw-bold '><h2><b>LogIn</b></h2></Form.Text>
                    <Form onSubmit={loginHandler}  >
                     
                    <Form.Label className='ml-0 mb-2 fw-bold'>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} className='mb-2 border border-dark' required/>
                    <Form.Label className='mb-2 fw-bold'>Password</Form.Label>
                    <Form.Control type='password' className='mb-2  border border-dark'ref={passwordRef} required/>
                    <Form.Text ><a href=''>'forgot password?</a></Form.Text> <br/> <br/>
                    <Button type='submit' className='mb-2 button'><b>LogIn</b></Button>
                    <Form.Text><a href='/signup'>'Dont Have An Account?</a></Form.Text>
                </Form></Col>
                    
                <Col className='col-4'></Col>
                
                </Row>
            </Container>
        </Fragment>
    );
}

export default LogIn