import "./Forum.css"
import ForumDisplayCard from "../ForumDisplayCard/ForumDIsplayCard"
import AddPostModal from "../AddPostModal/AddPostModal"
import CircleButton from "../CircleButton/CircleButton"
import { Col, Row, Container} from "react-bootstrap"
import {BiPlus } from "react-icons/bi"
import { useState } from "react"
import NavLink from '../NavLink/NavLink';
import { BsPersonCircle } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Forum () {
  const navigate = useNavigate();


    const [show, setShow] = useState(false);
    return <div className="full-body-container-forum">
      <div className = "links">
        <NavLink href = "/emailCorrection" title = "Email"/>
        <NavLink href = "/forum" title = "Forum"/>
        <CircleButton onClick= {() => navigate('/user')} buttonType={BsPersonCircle}/>
      </div>
        <Container className="containerSize">
        <Row style={{ marginTop: '30px', marginLeft: '610px', marginBottom: '20px', marginRight: "-10px", float:"left"}}>
        
        <CircleButton buttonType={BiPlus} onClick={()=>{setShow(true)}}/>

<AddPostModal title="Add a New Post" show = {show} onHide={()=>setShow(false)}/>
       
        
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <Col md={5}/>
      <Col md={7}>
          {/* Item 1 */}
          <div className="mb-3"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
          {/* Item 2 */}
          <div className="mb-3"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
          {/* Item 3 */}
          <div className="mb-3"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
        </Col>

       
      </Row>
      
    
      
      <div className = "buttonPairs-forum">
       <Button className = "button">Spotlight</Button>
       <Button className = "button">Contact</Button>
      </div>
    </Container>
       
    </div>
}