import { Badge } from "react-bootstrap";

type TagType = {
    typeName: string,
    bgColor: string,
    onClick?: () => void,
    clicked?: boolean

}
function Tag(props: TagType) {
    return <Badge pill style={{
        cursor: 'pointer',
        border: `1px solid ${props.clicked ? 'black' : ''}`,
      }} bg = {props.bgColor} >
        {props.typeName}
    </Badge>
}

export default Tag