import React from "react";

const Solution = () => {
  return (
    <div className="custom-carousel owl-theme">
      <div className="solution-item" style={{ backgroundColor: "#0078d7" }}>
        {" "}
        <img src="img/Solutions/logo_windows-white.svg" alt="windows" />
      </div>
      <div className="solution-item" style={{ backgroundColor: "#005ba1" }}>
        {" "}
        <img src="img/Solutions/logo-azure-devops-white.svg" alt="azure" />
      </div>
      {/* <div className="solution-item" style={{ backgroundColor: "#211F1F", height:"100%"  }}> <img src="img/Solutions/linux.svg" alt="ios" style={{height:"100%", width:"100%"}}/></div> */}
      <div
        className="solution-item"
        style={{
          backgroundColor: "#211F1F",
          height: "100%",
          color: "#fff",
          fontSize: "1rem",
          textAlign: "center",
          verticalAlign: "middle",
          padding: "16px 0",
        }}
      >
        Linux
      </div>
      <div className="solution-item" style={{ backgroundColor: "#5c2d91" }}>
        {" "}
        <img
          src="img/Solutions/logo_visualstudio-white.svg"
          alt="visual studio"
        />
      </div>
      <div className="solution-item" style={{ backgroundColor: "#0078d4" }}>
        {" "}
        <img src="img/Solutions/logo-microsoft-365-white.svg" alt="microsoft" />
      </div>
      <div className="solution-item" style={{ backgroundColor: "#d83b01" }}>
        {" "}
        <img src="img/Solutions/logo_office-white.svg" alt="office" />
      </div>
      <div className="solution-item" style={{ backgroundColor: "#107c10" }}>
        {" "}
        <img
          src="img/Solutions/logo_enterprisemobility-white.svg"
          alt="enterprise mobility"
        />
      </div>
      {/* <div className="solution-item" style={{ backgroundColor: "#211F1F"}}> <img src="img/Solutions/iOS.svg" alt="ios" style={{height:"100%", width:"100%"}}/></div> */}
      <div
        className="solution-item"
        style={{
          backgroundColor: "#211F1F",
          height: "100%",
          color: "#fff",
          fontSize: "1rem",
          textAlign: "center",
          verticalAlign: "middle",
          padding: "16px 0",
        }}
      >
        iOS
      </div>
    </div>
  );
};

export default Solution;
