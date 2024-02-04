import "./ForumDisplayCard.css"
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostModal from "../PostModal/PostModal";
import {Button} from "react-bootstrap";
import { useState } from "react";
type ForumDisplayCardType = {
    title: string,
    body: string
}
function ForumDisplayCard(props: ForumDisplayCardType) {
    const [getPost, setGetPost] = useState(false);
    return (
        <Card id = "cardColor">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                 <Card.Text>{props.body}</Card.Text>
                 <Button variant="primary" onClick={()=> setGetPost(true)}>Click here to learn more</Button>
                 <PostModal title={props.title} body={props.body} show={getPost} onHide={() =>setGetPost(false)}/>
            </Card.Body>
        </Card>
    )
}

export default ForumDisplayCard