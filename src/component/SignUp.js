import react,{Fragment,useRef} from 'react'
import { Button, Container, Form, Row,Col } from 'react-bootstrap';
import backgroundImg from '../images/yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg'
const SignUp=()=>{
const emailRef=useRef()
const passwordRef=useRef()
const confirmPasswordRef=useRef()
 const signUpHandler=(event)=>{
  event.preventDefault()

  console.log('email: '+emailRef.current.value+'password: '+passwordRef.current.value+'confirmPassword: '+confirmPasswordRef.current.value)
 }
    return(
        <Fragment>
            <Container  fluid>
            
                <Row>
                    <Col className='col-4'></Col>
                    <Col className='col-4' style={{backgroundImage:`url(${backgroundImg})`}}>
                    <Form.Text><h2>SignUp</h2></Form.Text>
                    <Form onSubmit={signUpHandler}  >
                     
                    <Form.Label className='ml-0 mb-2'>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} className='mb-2' required/>
                    <Form.Label className='mb-2'>Password</Form.Label>
                    <Form.Control type='password' className='mb-2'ref={passwordRef} required/>
                    <Form.Label className='mb-2'>Confirm Password</Form.Label>
                    <Form.Control type='password' className='mb-2' ref={confirmPasswordRef} required/>
                    <Button type='submit' className='mb-2'>SignUp</Button>
                    <Form.Text><a href=''>'Already Have An Account?</a></Form.Text>
                </Form></Col>
                    
                
                <Col className='col-4'></Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default SignUp