import { Navigate, Route, Routes } from "react-router-dom";
import ContactUs from "../../ContactUsArea/ContactUs/ContactUs";
import ControlTower from "../../ControlTower/ControlTower";
import Home from "../../HomeArea/Home/Home";
import Support from "../../SupportArea/Support/Support";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="control-tower" element={<ControlTower />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/" element={<Navigate to="/home" />} />
            {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
    );
}

export default Routing;