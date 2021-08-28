import React from "react";
import Clock from "./Clock";


function CountDown() {
  let deadline = "October, 19, 2021";
  
  return (
    <>
    <Clock   deadline={deadline} />
    </>
    );
}

export default CountDown;
