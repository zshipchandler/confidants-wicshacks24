import "./CircleButton.css"
import { IconType } from "react-icons"
import { Button } from "react-bootstrap"
type CircleButtonType = {
    buttonType: IconType;
    onClick?: () => void;
}
function CircleButton(props:CircleButtonType) {
    return <Button variant="light" className="rounded-circle" onClick={props.onClick}>
      <props.buttonType/>
    </Button>
}

export default CircleButton