import React from "react";
import HappySunImage from "./../images/happy-sun.jpg";
import HappyMoonImage from "./../images/happy-moon.jpg";
import "./DateTime.css";

function DateTime() {
    const date = new Date();
    const day = date.toLocaleString("en-us", {weekday: "long"});
    const morning = date.getHours() >= 6 && date.getHours() <= 18;
    let dayMessage;
    if (day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    } else if (day.toLowerCase() === "tuesday") {
        dayMessage = `${day}, four days to go`;
    } else if (day.toLowerCase() === "wednesday") {
        dayMessage = `${day}, half way there`;
    } else if (day.toLowerCase() === "thursday") {
        dayMessage = `${day}, start planning the weekend.`;
    } else if (day.toLowerCase() === "friday") {
        dayMessage = `Woo - hoo, the weekend is coming!`;
    } else {
        dayMessage = "stay calm and keep having fun";
    }
    function IsItMorning() {
        if (morning) {
            return (
            <>
                <p>Have you had breakfast yet?</p>
                <style>
                    {`body { background-image: url(${HappySunImage}); }`}
                </style>
            </>)
        } else {
            return (
            <>
                <p>Have you had dinner yet</p>
                <style>
                    {`body { background-image: url(${HappyMoonImage});}`}
                </style>
            </>)
        }
    }
    return (
        <div>
            <h3>{dayMessage}</h3>
            <div>{IsItMorning()}</div>
        </div>
    )
}
export default DateTime;