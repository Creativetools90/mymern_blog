import React from "react";

const RightPannel = (props) => {
  return (
    <>
      <div className="rightpannel">
        {props.children}
      </div>
    </>
  );
};

export default RightPannel;
