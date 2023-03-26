import { Input } from "@material-ui/core";
import { isValidElement, SetStateAction, useState } from "react";
import useTitle from "../../../Services/useTitle";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    
    useTitle("UPTOSKY | Contact Us");
    
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');
    
    const ClearMessage1 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessage1(event.target.value)
    }
    const ClearMessage2 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessage2(event.target.value)
    }
    const ClearMessage3 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessage3(event.target.value)
    }
    
    const MessageShowMessageSend = () => {
        alert("The message sent successfully")
        setMessage1("");
        setMessage2("");
        setMessage3("");
    }
    const MessageShowMessageCancel = () => {
        alert("The message cancel successfully")
        setMessage1("");
        setMessage2("");
        setMessage3("");
    }
    
    
    return (
        
        <div className="ContactUs">

            <h3>Contact Us</h3>

            <label>Name: </label>
            <br />
            <input type="text" placeholder="Enter Name" onChange={ClearMessage1} value={message1} />
            <br />

            <label>Email: </label>
            <br />
            <input type="text" placeholder="Enter Email" onChange={ClearMessage2} value={message2} />
            <br />

            <label>Message: </label>
            <br />
            <input type="text" placeholder="Enter Message" onChange={ClearMessage3} value={message3} />
            <br />
            <br />

            <button onClick={MessageShowMessageSend}>Send</button>
            <button onClick={MessageShowMessageCancel}>Cancel</button>
        </div>
    );
}

export default ContactUs;