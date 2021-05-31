import React from "react";
import ReactLoading from "react-loading";
import "./Loading.css";

function Loading() {
  return (
    <div className="Loading">
      <ReactLoading
        type="bars"
        color="#333"
        width={"20vw"}
        className="loading"
      />
    </div>
  );
}

export default Loading;
