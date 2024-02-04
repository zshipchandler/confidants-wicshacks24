
import Tag from "../Tag/Tag";
import "./AddPostModal.css"
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

type AddPostModalType = {
    title: string,
    show: boolean,
    onHide: () => void
}
function AddPostModal(props: AddPostModalType) {


  const buttons = [
    { id: 1, label: 'Tech', bgColor: '#FFD3BA' },
    { id: 2, label: 'Business', bgColor:'#ffd4ca'},
    { id: 3, label: 'Questions', bgColor: '#F49FBC' },
    { id: 4, label: 'Announcements', bgColor: '#EC6C99' },
    { id: 5, label: 'News', bgColor: '#D90368' },
  ];

    return <Modal show = {props.show} onHide = {props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="input-title">
            
            <Form.Control
            placeholder = "Add Title Here"
            type="text"
            autoFocus
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tags">
            <Form.Label className="mb-3" >Select Tags</Form.Label>
            <div className="tags">
            {buttons.map((button) => (
                <Tag
                typeName={button.label}
                bgColor={button.bgColor}
                key={button.id}
                onClick={() => {}}
                />
                
            ))}
            </div>
            
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="body"
        >
            <Form.Control as="textarea" placeholder = "Add Body Here" rows={3} />
        </Form.Group>
        </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="primary" className = "buttonColorSubmit" onClick={props.onHide}>
            Make a Post!
          </Button>
        </Modal.Footer>
    </Modal>
}

export default AddPostModal