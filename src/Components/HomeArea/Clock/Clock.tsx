import "./Clock.css";
import { useEffect, useState } from "react";

interface ClockProps {
    AMPM?: boolean;
}

function Clock(props: ClockProps): JSX.Element {

    const [time, setTime] = useState<string>(getTime());

    useEffect(() => {
        const timerId = window.setInterval(() => {
            // console.log(getTime())
            setTime(getTime());
        }, 1000);

        //componentWillUnmount: 
        return () => window.clearInterval(timerId);
    }, []);


    function getTime() {
        const now = new Date();
        return props.AMPM ? now.toLocaleTimeString() : now.toTimeString().substring(0, 8);
    }

    return (
        <div className="Clock">
            {time}
        </div>
    );
}

export default Clock;