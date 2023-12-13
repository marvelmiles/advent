import React from "react";
import "./index.css";

const Totop = props => {
  return (
    <div
      id="to-top"
      className="fixed-bottom to-top d-flex justify-content-center align-items-center font-weight-lighter ml-auto m-5"
    >
      <i
        className="fas fa-arrow-up text-white"
        style={{ cursor: "pointer" }}
        onClick={_ => window.scrollTo(0, 0)}
      ></i>
    </div>
  );
};

export default Totop;
