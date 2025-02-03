import React from "react";
import Lottie from "lottie-react";
import loadingBook from "../assets/loading.json";

const LoadingBook = () => {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        width: "100vw",
      }}>
        <Lottie 
          animationData={loadingBook} 
          loop={true} 
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  };

export default LoadingBook;
