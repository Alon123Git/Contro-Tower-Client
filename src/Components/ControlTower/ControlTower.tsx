import axios from "axios";
import React, { Fragment, SyntheticEvent, useState } from "react";
import { Component, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import PlanesModel from "../../Models/PlanesModel";
import loggerAxios from "../../Services/AxiosService";
import AxiosService from "../../Services/AxiosService";
import config from "../../Services/Config";
// import config from "../../Services/Config";
import "./ControlTower.css";
import PlaneImage from "./PlaneImage/PlaneImage";
import TerminalImage from "./terminalImage/terminalImage";

interface ControlTowerProps {
    planes: PlanesModel[];
}

// interface DeletePlanesState { plane: PlanesModel; }
// interface RouteParams { id: string; }
// interface DeleteProductProps extends RouteComponentProps<RouteParams> {}

// const navigate = useNavigate();

class ControlTower extends Component<{}, ControlTowerProps> {

    // ctor:
    public constructor(props: {}) {
        super(props);
        this.state = {
            planes: []
        };
    }

    // config.urls.planes
    public async componentDidMount() {
        try {
            const response = await loggerAxios.get<PlanesModel[]>("https://localhost:7068/flight");
            this.setState({ planes: response.data });
            console.log("my response: " + response);
            console.log("Length of Data: " + response.data.length);
            // for (const item in response.data) {
            //     if (Object.prototype.hasOwnProperty.call(response.data, item)) {
            //         const element = response.data[item];
            //         console.log("id: " + element.id);
            //         console.log("PassangerCount: " + element.passengersCount);
            //         console.log("serialNumber: " + element.serialNumber);
            //         console.log("isDeparture: " + element.isDeparture);
            //         console.log("isLanding: " + element.isLanding);
            //     }
            // }

            response.data.forEach(item => {
                console.log("PassangerCount2: " + item.passengersCount);
            });
        }
        catch (err) {
            alert("Error");
        }
    }

    // public async componentDidMount2() {
    //     try {
    //         const response = await axios.delete<PlanesModel>(config.urls.planes + this.props.match.params.id);
    //         this.setState({ plane: response.data });
    //     }
    //     catch (err) {
    //         console.log(err);
    //         alert("error");
    //     }
    // }

    // private deleteHandler = async () => {
    //     try {
    //         await axios.delete(config.urls.planes + this.state.plane.id);
    //         alert("Product has been deleted successfully.");
    //         navigate("/products");
    //     }
    //     catch (err) {
    //         alert("error");
    //     }
    // }


    public render(): JSX.Element {
        return (
            <div className="ControlTower">
                <div className="terminal">
                    <TerminalImage />
                    <PlaneImage />
                </div>
                {this.state.planes.map(p =>
                    <Fragment>
                        <div className="serverData">
                             <span>id: {p.flId}</span>
                            {/*<br />
                            <span>passengers: {p.passengersCount}</span>
                            <br />
                            <span>serial number: {p.serialNumber}</span>
                            <br /> */}
                            {/* <span>landing: {p.isLanding}</span>
                            <br />
                        <span>departure: {p.isDeparture}</span> */}
                        </div>
                        
                    </Fragment>
                )}
            </div>
        );
    }
}

export default ControlTower;