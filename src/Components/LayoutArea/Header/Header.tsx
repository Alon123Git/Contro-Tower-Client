import Clock from "../../HomeArea/Clock/Clock";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>UPTOSKY 🛫 </h1>
            <Logo />
            <Clock />
        </div>
    );
}

export default Header;