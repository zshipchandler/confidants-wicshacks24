import "./Forum.css"
import ForumDisplayCard from "../ForumDisplayCard/ForumDIsplayCard"
import AddPostModal from "../AddPostModal/AddPostModal"
import CircleButton from "../CircleButton/CircleButton"
import { Col, Row, Container} from "react-bootstrap"
import {BiPlus } from "react-icons/bi"
import { useState } from "react"
export default function Forum () {

    const [show, setShow] = useState(false);
    return <div className="full-body-container">
        <Container className = "float-right">
           
      <Row>
        <Col md={2}/>
        <Col md={3}/>
      <Col md={7}>
          {/* Item 1 */}
          <div className="mb-3 mr-9"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
          {/* Item 2 */}
          <div className="mb-3"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
          {/* Item 3 */}
          <div className="mb-3"><ForumDisplayCard title="test" body="test"/></div> {/* Add margin-bottom */}
        </Col>

       
      </Row>
      <div className = "adjustBox">
        <CircleButton buttonType={BiPlus} onClick={()=>{setShow(true)}}/>

        <AddPostModal title="Add a New Post" show = {show} onHide={()=>setShow(false)}/>
      </div>
    
      
      
    </Container>
       
    </div>
}