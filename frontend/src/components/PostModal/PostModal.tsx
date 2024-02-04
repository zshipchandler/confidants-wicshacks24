import { Modal } from "react-bootstrap";
import CircleButton from "../CircleButton/CircleButton";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BiHeart, BiMessage } from 'react-icons/bi';
import { HiArrowSmRight } from "react-icons/hi";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PostModal.css"
type PostModalType = {
    title: string,
    body: string
    show: boolean,
    onHide: () => void
}

function PostModal(props: PostModalType) {

    return <Modal  centered show={props.show} onHide={props.onHide} >
    <Modal.Header closeButton >
      <Modal.Title >{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="postModal">{props.body}
        <Form.Group className="elementContainer" controlId="formPlaintextPassword">
            <Form.Control type="password" placeholder=" Add Comment" />
            
            <CircleButton buttonType={HiArrowSmRight}/>
            <CircleButton buttonType={BiHeart}/>
            <CircleButton buttonType={BiMessage}/>
        </Form.Group>
      
        <Card className="card-margin" >
            <ListGroup.Item>
            <Card.Title>User 1</Card.Title>
                <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Body>
            </ListGroup.Item>
        </Card>
        <Card className="card-margin">
        <ListGroup.Item>
            <Card.Title>User 2</Card.Title>
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Body>
            </ListGroup.Item>
        </Card>
        <Card className="card-margin">
        <ListGroup.Item>
            <Card.Title>User 3</Card.Title>
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Body>
            </ListGroup.Item>
        </Card>
        
    </Modal.Body>
  </Modal>
}


export default PostModal