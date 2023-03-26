import "./Discount.css";

function Discount(): JSX.Element {
    const percent = 50;

    return (
        <div className="Discount">
			<p>Only now, on {getDate()} - <span>{percent}%</span> discount on all the flights!</p>
        </div>
    );
}

function getDate(): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const now = new Date();
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    return currentMonth + " " + currentYear;
}

export default Discount;