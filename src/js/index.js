//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { SvgClock } from "./component/clockicon.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let count = 0

const Counter = (props) => {

    const {
        digitOne,
        digitTwo,
        digitThree,
        digitFour,
    } = props;

    return (
        <div className="clock"> 
            <div className="clockSvg">
                <SvgClock/>
            </div>
            <p className="card bg-dark Thou">{digitFour%10}</p>
            <p className="card bg-dark Hun">{digitThree%10}</p>
            <p className="card bg-dark Tenz">{digitTwo%10}</p>
            <p className="card bg-dark Zedd">{digitOne%10}</p>

        </div>
    )
}

const intervalId = setInterval(() => {

    const thousand = Math.floor(count/1000);
    const hundred = Math.floor(count/100);
    const ten = Math.floor(count/10);
    const zero = Math.floor(count/1);

    ReactDOM.createRoot(document.getElementById('app')).render(
        <>
        <Counter digitOne={zero} digitTwo={ten} digitThree={hundred} digitFour={thousand} />
        </>
    );
    count++;
}, 1000); 

