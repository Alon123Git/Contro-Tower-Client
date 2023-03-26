import "./PlaneImage.css";
import planeImage from "../../../Assets/Images/Plane.jpeg";
import { Fragment } from "react";

function PlaneImage(): JSX.Element {
	return (
		<Fragment>
			<div className="img1">
				<img width="100" height="100" src={planeImage} />
				<img width="10" height="10" src={planeImage} />
				<img width="10" height="10" src={planeImage} />
				<img width="10" height="10" src={planeImage} />

			</div>
			<div className="img2">
				<img width="10" height="10" src={planeImage} />
				<img width="10" height="10" src={planeImage} />
			</div>
			<div className="img3">
				<img width="10" height="10" src={planeImage} />
				<img width="10" height="10" src={planeImage} />
			</div>
		</Fragment>
	);
}

export default PlaneImage;
