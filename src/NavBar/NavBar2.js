
import React,{Fragment} from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import './NavBar2.css'
const NavBar2=()=>{
   
      return(
        <Fragment>
          
          <Navbar expand="lg" className="navbar2 position-fixed " >
        <Container fluid>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto-navbar2">
              <Nav.Link className='m-2'><b>Starred</b></Nav.Link>
              <Nav.Link  className='m-2'><b>Snoozed</b></Nav.Link>
               <Nav.Link className='m-2'><b>Draft</b></Nav.Link>
               <Nav.Link className='m-2'><b>Spam</b></Nav.Link>
               <Nav.Link className='m-2'><b>Trash</b></Nav.Link>
               <Nav.Link className='m-2'><b>All Mail</b></Nav.Link>
               <Nav.Link className='m-2'><b>Important</b></Nav.Link>
               
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
        </Fragment>
      );
  }
  
  
  export default NavBar2