import useTitle from "../../../Services/useTitle";
import BestDeal from "../BestDeal/BestDeal";
import Clock from "../Clock/Clock";
import Discount from "../Discount/Discount";
import "./Home.css";

function Home(): JSX.Element {

    useTitle("UPTOSKY | Home");


    return (
        <div className="Home">

        <h1>Home Page</h1>
            {/* <Clock /> */}

			<Discount />


            <BestDeal />
        </div>
    );
}

export default Home;