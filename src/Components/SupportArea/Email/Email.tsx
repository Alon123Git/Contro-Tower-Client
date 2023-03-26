import "./Email.css";

const randomNumber = Math.random();
const fixedBackColor = randomNumber < 0.5 ? "lightblue" : "lightgreen";
const hoverBackColor = randomNumber < 0.5 ? "darkblue" : "darkgreen";


function Email(): JSX.Element {

    const s = {
        backgroundColor: fixedBackColor,
        ":hover": {
            backgroundColor: hoverBackColor,
            color: "white"
        }
    };

    return (
        <div className="Email" style={s}>
            <p>LET US KNOW for any question. send to the Email: alonadar94@gmail.com</p>
        </div>
    );
}

export default Email;
