import { useState } from "react";
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

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId: number) => {
    // Toggle the selected state of the button
    // setSelectedButtons(() => {
    //   if (selectedButtons.includes(buttonId)) {
    //     return selectedButtons.filter((id) => id !== buttonId);
    //   } else {
    //     return [...selectedButtons, buttonId];
    //   }
    // });
  };

  const buttons = [
    { id: 1, label: 'Tech', bgColor: 'primary' },
    { id: 2, label: 'Business', bgColor:'secondary'},
    { id: 3, label: 'Questions', bgColor: 'success' },
    { id: 4, label: 'Announcements', bgColor: 'danger' },
    { id: 5, label: 'News', bgColor: 'info' },
  ];

    return <Modal show = {props.show} onHide = {props.onHide}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="input-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            autoFocus
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <div className="tags">
            {buttons.map((button) => (
                <Tag
                typeName={button.label}
                bgColor={button.bgColor}
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                />
                
            ))}
            </div>
            
        </Form.Group>
        <Form.Group
            className="mb-3"
            controlId="body"
        >
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
}

export default AddPostModal