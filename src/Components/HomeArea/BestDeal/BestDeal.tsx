import "./BestDeal.css";
import { Fragment, useState } from "react";

function BestDeal(): JSX.Element {

    const [item, setItem] = useState<string>("");

    const [price, setPrice] = useState<number>(0);

    function itemHandler() {
        setItem("Flight to China");
    }

    function priceHandler() {
        setPrice(250);
    }

    return (
        <div className="BestDeal">
            <span id="sp">Press to see the best deal today:</span>
            <button className="btnLocation" onClick={itemHandler}>Best Location Deal</button>
            <button className="btnPrice" onClick={priceHandler}>Best Deal Price</button>
            <span id="item">{item}</span>
            <span> | </span>
            <span id="price">${price}</span>
        </div>
    );
}

export default BestDeal;