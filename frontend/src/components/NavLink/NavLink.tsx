import { Nav } from "react-bootstrap"
import "./NavLink.css"

type NavLinkType = {
    title: string
    href: string
}
function NavLink(props: NavLinkType) {
    return  <Nav.Item className="navLink">
    <Nav.Link href={props.href}>{props.title}</Nav.Link>
  </Nav.Item>
}

export default NavLink