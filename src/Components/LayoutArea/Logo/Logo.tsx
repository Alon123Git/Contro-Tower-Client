import "./Logo.css";
import LogoImage from "../../../Assets/Images/Logo.jpg";

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={LogoImage}  />
        </div>
    );
}

export default Logo;