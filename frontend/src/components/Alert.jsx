import React from "react";
import "../App.css"

export default function Alert(props) {
    console.log("the props are ", props)
  return (
    <div className=" text-red-500 w-full text-center" role="alert">
    <strong>{props.message}!</strong> .
    </div>
  );
}
