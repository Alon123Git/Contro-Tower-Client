import "./terminalImage.css";
import terminalImage from "../../../Assets/Images/Terminal.jpeg";
import { Fragment } from "react";


function TerminalImage(): JSX.Element {
	return (
		<Fragment>
			<div className="img1">
				<img width="100" height="100" src={terminalImage} />
				<img width="50" height="50" src={terminalImage} />
				<img width="50" height="50" src={terminalImage} />
				<img width="50" height="50" src={terminalImage} />
			</div>
			<div className="img2">
				<img width="50" height="50" src={terminalImage} />
				<img width="50" height="50" src={terminalImage} />
			</div>
			<div className="img3">
				<img width="50" height="50" src={terminalImage} />
				<img width="50" height="50" src={terminalImage} />
			</div>
		</Fragment>
	);
}

export default TerminalImage;
