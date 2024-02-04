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
        backgroundColor: props.bgColor,
        color: `${props.typeName == 'Tech' || props.typeName == 'Business' || props.typeName == 'Questions' ? '#000000' : '#ffffff'}`
      }} bg = {props.bgColor} >
        {props.typeName}
    </Badge>
}

export default Tag