import React from "react";

const DownIcon = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "-29px",
        transform: "translateY(-75px)"
      }}
    >
      <div
        style={{
          maxHeight: "25px",
          maxWidth: "30px"
        }}
      >
        <img src={props.icon} />
      </div>
    </div>
  );
};
export default DownIcon;
