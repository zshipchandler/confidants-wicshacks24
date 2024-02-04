import "./ForumDisplayCard.css"
import {Card} from 'react-bootstrap'
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
        <Card className = "cardColor">
            <Card.Title className="title">
            {props.title}
                </Card.Title>
            <Card.Body>
                 <Card.Text>{props.body}</Card.Text>
                 <Button variant="primary" className="buttonColor" onClick={()=> setGetPost(true)}>Click here to learn more</Button>
                 <PostModal title={props.title} body={props.body} show={getPost} onHide={() =>setGetPost(false)}/>
            </Card.Body>
        </Card>
    )
}

export default ForumDisplayCard