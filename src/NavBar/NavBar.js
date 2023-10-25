import React,{Fragment} from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap';
import { useDispatch,useSelector} from 'react-redux';
import { authActions } from '../ReduxStore/AuthSlice';
import email from '../images/email.png'
import './NavBar.css'
const NavBar=()=>{
  const dispatch=useDispatch()
  const login=useSelector((state)=>state.auth.isAuthenticated)
    const LogoutHandler=()=>{
       dispatch(authActions.logout())
    }
    return(
      <Fragment>
        
        <Navbar expand="lg" className="fixed-top navbar" >
        <Container >
        <Navbar.Brand ><img src={email} alt='' className='logo'/></Navbar.Brand>
        <Navbar.Brand style={{color:'white'}} className='fw-bold'>MailBox Client</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:'white'}} ><b>Home</b></Nav.Link>
            {login && <Nav.Link href='/login' onClick={LogoutHandler}style={{color:'white'}} ><b>Logout</b></Nav.Link>}
            {!login && <Nav.Link href='/signup' style={{color:'white'}} ><b>SignUp</b></Nav.Link>}
           
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   
  
      </Fragment>
    );
}


export default NavBar