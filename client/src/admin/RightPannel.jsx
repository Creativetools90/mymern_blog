import React from "react";

const RightPannel = (props) => {
  return (
    <>
      <div className="rightpannel">
        RightPannel
        {props.children}
      </div>
    </>
  );
};

export default RightPannel;
