import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h5>Cousin</h5>
      <p>
        <small>{children}</small>
        {hasFriend && <Friend ring={ring}></Friend>}
      </p>
    </div>
  );
};

export default Cousin;
