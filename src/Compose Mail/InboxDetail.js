import React,{Fragment} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import profileImage from '../images/user (1).png'
import './Inbox.css'
const InboxDetail=(props)=>{
    return(
      <Fragment>
          <Container className='inbox'>
             <Row>
                <h1 className='m-4'>{props.item.subject}</h1>
             </Row>
             <Row>
                <Col className='col-1'>
                  <img src={profileImage} alt='profile' className='profile-image'/>
                </Col>
                <Col>
                  <Row>
                    <h3>{props.email}</h3>
                  </Row>
                  <Row>
                    <p>to me</p>
                  </Row>    
                </Col>
             </Row>
             <Row>
                <Container className='discription-area'>
                     <p>{props.item.description}</p>
                </Container>
             </Row>
             <Row>
                <Col className='col-1'>
                <Button>Replay</Button>
                </Col>
                <Col className='col-1'>
                <Button>Forward</Button>
                </Col>
             </Row>
          </Container>
      </Fragment>
    );
}
export default InboxDetail