import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <nav className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/control-tower">Control Tower</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </nav>
    );
}

export default Menu;
