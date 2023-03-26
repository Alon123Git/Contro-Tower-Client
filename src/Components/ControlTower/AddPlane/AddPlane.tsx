import axios from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanesModel from "../../../Models/PlanesModel";
import config from "../../../Services/Config";
import PlanesService from "../../../Services/PlanesService ";
import "./AddPlane.css";

function AddPlane(): JSX.Element {

    const [planes, setPlanes] = useState<PlanesModel[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            PlanesService.addPlane({ id: Date.now(), passengersCount: Math.random() * 100, serialNumber: Math.random() * 100 })
                .then((newPlane) => {
                    // update the state with the new plane
                    setPlanes(currentPlanes => [...currentPlanes, newPlane]);
                    // console.log(planes)
                });
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const deletePlane = (planeId: string) => {
        PlanesService.deletePlane(planeId)
            .then(() => {
                // update the state to remove the deleted plane
                setPlanes(planes.filter((p) => p.flId !== parseInt(planeId)));
            });

    }
    return (
        <div className="AddPlane">

        </div>
    );
}
export default AddPlane;






















// const { register, handleSubmit, formState } = useForm<PlanesModel>();

// async function submit(plane: PlanesModel): Promise<void> {
//     try {
//         // const formData = new FormData();
//         // formData.append("name", plane.id.toString());
//         // formData.append("price", plane.passengersCount.toString());
//         // formData.append("stock", plane.serialNumber.toString());
//         // formData.append("image", plane.image.item(0));
//         const response = await axios.post<PlanesModel>(config.urls.planes, plane);
//         alert("Product hsa been successfully added. new id: " + response.data.id);
//         navigate("/control-tower");
//     }
//     catch (err) {
//         console.log(err);
//         alert("error");
//     }
// }

// const [imageSource, setImageSource] = useState<string>(null);
// function previewHandler(args: SyntheticEvent): void {
//     const image = (args.target as HTMLInputElement).files[0];
//     const fileReader = new FileReader();
//     fileReader.onload = (event: ProgressEvent) => {
//         const base64Image = (event.target as FileReader).result.toString();
//         setImageSource(base64Image);
//     }
//     fileReader.readAsDataURL(image);
// }