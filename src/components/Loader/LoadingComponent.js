import React from "react";
import "./LoadingComponent.css";
import { Spinner } from "react-bootstrap";

const LoadingComponent = (props) => {
  const { loading } = props;
  
  return (
    <>
      {loading && (
        <div className="spinner__block">
          <Spinner
            animation="border"
            role="status"
            className="loader"
          ></Spinner>
        </div>
      )}
    </>
  );
};

export default LoadingComponent;
