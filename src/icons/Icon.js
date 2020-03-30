import React from "react";

const XIcons = (props) => {
  return(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {props.width ? props.width : 24}
      height= {props.height ? props.height : 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth= {props.strokeWidth ? props.strokeWidth : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {props.children}
    </svg>
  );
}

export default XIcons
