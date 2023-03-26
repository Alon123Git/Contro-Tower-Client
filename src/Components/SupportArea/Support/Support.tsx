import useTitle from "../../../Services/useTitle";
import Adress from "../Adress/Adress";
import Email from "../Email/Email";
import HoursDetails from "../HoursDetails/HoursDetails";
import "./Support.css";

function Support(): JSX.Element {

    useTitle("UPTOSKY | Support");

    return (
        <div className="Support">

        <h2>Support</h2>

			<Adress />

            <Email />

            <HoursDetails />
        </div>
    );
}

export default Support;
