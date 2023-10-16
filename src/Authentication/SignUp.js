import react,{Fragment,useRef} from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap';
import './SignUp.css'
import { authSignUp } from '../ReduxStore/fetchAuthActions';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../ReduxStore/AuthSlice';

const SignUp=()=>{
const emailRef=useRef()
const passwordRef=useRef()
const confirmPasswordRef=useRef()
let error=useSelector((state)=>state.auth.authError)
const dispatch=useDispatch()
 const signUpHandler=(event)=>{ 
  event.preventDefault()
  if(passwordRef.current.value!==confirmPasswordRef.current.value)
  {
    emailRef.current.value=''
  passwordRef.current.value=''
  confirmPasswordRef.current.value=''
    dispatch(authActions.setAuthError('Password Missmatch! Try Again'))
    return
  }
  const data={ 
    email:emailRef.current.value,
    password:passwordRef.current.value,
    returnSecureToken:true
  }
  emailRef.current.value=''
  passwordRef.current.value=''
  confirmPasswordRef.current.value=''
  dispatch(authSignUp(data))
 
 error=''
 }
    return(
        <Fragment>
            <Container className=' authentication' fluid>
            
                <Row>
                    <Col className='col-4'></Col>
                    
                    <Col className='col-4 form m-5' >
                    <Form.Text className='fw-bold '><h2><b>SignUp</b></h2></Form.Text>
                    <Form onSubmit={signUpHandler}  >
                     
                    <Form.Label className='ml-0 mb-2 fw-bold'>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} className='mb-2 border border-dark' required/>
                    <Form.Label className='mb-2 fw-bold'>Password</Form.Label>
                    <Form.Control type='password' className='mb-2  border border-dark'ref={passwordRef} required/>
                    <Form.Label className='mb-2 fw-bold'>Confirm Password</Form.Label>
                    <Form.Control type='password' className='mb-2  border border-dark' ref={confirmPasswordRef} required/>
                    <Button type='submit' className='mb-2 button'><b>SignUp</b></Button>
                    {error && <p>{error}</p>}
                    <Form.Text><a href='/login'>'Already Have An Account?</a></Form.Text>
                </Form></Col>
                    
                <Col className='col-4'></Col>
                
                </Row>
            </Container>
        </Fragment>
    );
}

export default SignUp