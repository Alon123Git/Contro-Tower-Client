import colors from "../../../Services/ColorsService";
import "./Adress.css";

function Adress(): JSX.Element {

    const s = {
        backgroundColor: colors.getRandomColor(),
        color: colors.getRandomColor()
    }

    const paragraphClass = Math.random() < 0.5 ? "UpSlant" : "DownSlant";


    return (
        <div className="Adress" style={s}>
            <p className={paragraphClass}>Our Address: David Ben Gurion Air Port, Tel-Aviv</p>
        </div>
    );
}

export default Adress;
